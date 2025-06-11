import ToastService from 'mdt_commons/toastService'
import { useMemo, useState } from "react";

import api from "../../api";
import { IFile } from "../../types/interfaces";
import logger from "../logger";

export const useFilesList = () => {
  const [files, setFiles] = useState<Record<number, IFile[]>>({});
  const [currentRows, setCurrentRows] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const [isLoadingTotalPages, setIsLoadingTotalPages] = useState<boolean>(true);

  const isLoading = useMemo(
    () =>
      isLoadingPage || isLoadingTotalPages || (files[currentPage] === undefined && totalPages > 0),
    [isLoadingPage, isLoadingTotalPages, files, currentPage, totalPages]
  );

  const fetchFilesListPage = async (
    rows: number,
    page: number,
    entityType?: string,
    entityId?: number
  ) => {
    try {
      const response = await api.files.getFileList(rows, page, entityType, entityId);
      setFiles((prev) => ({ ...prev, [page]: response }));
      return response;
    } catch (error) {
      logger.error("Error fetching files page:", error);
      return [];
    }
  };

  const fetchFilesListTotalPages = async (rows: number, entityType?: string, entityId?: number) => {
    setIsLoadingTotalPages(true);
    setFiles({});
    setTotalPages(0);

    try {
      const totalPages = await api.files.getPageCount(rows, entityType, entityId);
      setTotalPages(totalPages);
      return totalPages;
    } catch (error) {
      logger.error("Error fetching total pages:", error);
      return 0;
    } finally {
      setIsLoadingTotalPages(false);
    }
  };

  const fetchFilesList = async (
    rows: number = currentRows,
    page: number = currentPage,
    entityType?: string,
    entityId?: number
  ) => {
    setIsLoadingPage(true);
    try {
      const totalPages = await fetchFilesListTotalPages(rows, entityType, entityId);
      await Promise.all([
        Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + (page || 1)).map(
          (pageIndex) => fetchFilesListPage(rows, pageIndex, entityType, entityId)
        )
      ]);
    } catch (error) {
      logger.error("Error fetching files page:", error);
    } finally {
      setIsLoadingPage(false);
    }
  };

  const onChangePage = async (page: number, rows: number) => {
    setCurrentPage(page);

    if (currentRows !== rows) {
      setCurrentPage(1);
      setCurrentRows(rows);
      await fetchFilesList(rows, 1);
    }

    if (!(page in files)) {
      setIsLoadingPage(true);
      await fetchFilesListPage(rows, page).finally(() => setIsLoadingPage(false));
    }
  };

  const onDeleteFile = (id: string) => {
    api.files
      .delete(id)
      .then((response) => {
        if (response.ok) {
          setFiles((prevState) => ({
            ...prevState,
            [currentPage]: prevState[currentPage].filter((file) => file.id !== id)
          }));
          ToastService.showSuccess("File deleted", "The file was deleted successfully.");
        } else {
          ToastService.showError(
            "Unable to delete file",
            "An error occurred while deleting the file. Please try again."
          );
        }
      })
      .catch((error) => logger.error(error));
  };

  return {
    files,
    currentRows,
    currentPage,
    totalPages,
    isLoading,
    fetchFilesList,
    fetchFilesListPage,
    fetchFilesListTotalPages,
    onChangePage,
    onDeleteFile
  };
};

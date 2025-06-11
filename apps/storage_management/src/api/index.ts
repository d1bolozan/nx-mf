import { getData } from "mdt_commons/fetch";
import { deleteFile, getFile, postFile } from "mdt_commons/fileManager";

import { IFileUploadResponse } from "../types/interfaces";

const composeQueryParams = (queryParams: Record<string, string | number | undefined>): string =>
  Object.entries(queryParams).length > 0
    ? "?" +
      Object.entries(queryParams)

        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join("&")
    : "";

export default {
  files: {
    get: (fileId: string) =>
      getFile(`${process.env.STORAGE_MANAGEMENT_API_URL}/file/${fileId}`).then((response) =>
        response.blob()
      ),
    getPageCount: (filesPerPage?: number, entityType?: string, entityId?: number) => {
      const url = `${process.env.STORAGE_MANAGEMENT_API_URL}/file/list/page-count`;
      const queryString = composeQueryParams({
        entityType,
        entityId,
        filesPerPage
      });

      const finalUrl = url + queryString;
      return getData(finalUrl).then((response) => response.json());
    },
    getFileList: (
      filesPerPage?: number,
      pageNumber?: number,
      entityType?: string,
      entityId?: number
    ) => {
      const url = `${process.env.STORAGE_MANAGEMENT_API_URL}/file/list`;
      const queryString = composeQueryParams({
        entityType,
        entityId,
        filesPerPage,
        pageNumber
      });

      const finalUrl = url + queryString;

      return getData(finalUrl).then((response) => response.json());
    },
    delete: (fileId: string) =>
      deleteFile(`${process.env.STORAGE_MANAGEMENT_API_URL}/file/${fileId}`),
    upload: async (files: File[], entityType?: string, entityId?: number) => {
      const destination = entityType && entityId ? `${entityType}/${entityId}` : "platform";

      const response = await postFile(
        `${process.env.STORAGE_MANAGEMENT_API_URL}/file?destination=${destination}`,
        files,
        entityType,
        entityId
      );
      return await (response.json() as Promise<IFileUploadResponse>);
    }
  }
};

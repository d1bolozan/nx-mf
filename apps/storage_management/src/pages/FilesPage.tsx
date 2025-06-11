import UserDataService from "mdt_commons/userService";
import { FC, useEffect } from "react";

import FilesTable from "../components/FilesTable/FilesTable";
import FileUploader from "../components/FileUploader/FileUploader";
import { environments } from "../environments/environments";
import { Rights } from "../types/enums/Rights";
import { useFilesList } from "../utils/hooks/useFilesList";
type FilePageProps = {
  entityType?: string;
  entityId?: number;
};

const FilesPage: FC<FilePageProps> = ({ entityId, entityType }) => {
  const {
    currentPage,
    currentRows,
    fetchFilesList,
    files,
    isLoading,
    onChangePage,
    onDeleteFile,
    totalPages
  } = useFilesList();

  useEffect(() => {
    fetchFilesList(currentRows, currentPage, entityType, entityId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId, entityType]);

  const refetchFilesList = () => {
    fetchFilesList(currentRows, currentPage, entityType, entityId);
  };

  const restFilesList = () => {
    onChangePage(1, currentRows);
    fetchFilesList(currentRows, 1, entityType, entityId);
  };

  return (
    <div className="container mx-auto flex flex-grow flex-col gap-2 overflow-hidden py-1">
      {UserDataService.HasRight(environments.APP_NAME, Rights.UploadFile) && (
        <FileUploader refetchFiles={restFilesList} entityId={entityId} entityType={entityType} />
      )}
      <div className="flex-grow overflow-hidden">
        <FilesTable
          currentPage={currentPage}
          currentRows={currentRows}
          fetchFilesList={refetchFilesList}
          files={files}
          isLoading={isLoading}
          onChangePage={onChangePage}
          onDeleteFile={onDeleteFile}
          totalPages={totalPages}
          entityId={entityId}
          entityType={entityType}
        />
      </div>
    </div>
  );
};

export default FilesPage;

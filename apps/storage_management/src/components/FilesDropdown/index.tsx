import UserDataService from "mdt_commons/userService";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { FC, useEffect, useState } from "react";

import { environments } from "../../environments/environments";
import { Rights } from "../../types/enums/Rights";
import { IFile } from "../../types/interfaces";
import { useFilesList } from "../../utils/hooks/useFilesList";
import FileUploader from "../FileUploader/FileUploader";
import FileItemTemplate from "./FileItemTemplate";
import SelectedFileTemplate from "./SelectedFileTemplate";

type Props = {
  entityType?: string;
  entityId?: number;
  selectedFile: IFile | string | null;
  onChangeFile: (value: IFile) => void;
};
const FilesSelect: FC<Props> = ({ entityId, entityType, selectedFile, onChangeFile }: Props) => {
  const { fetchFilesList, files, isLoading, currentPage } = useFilesList();

  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchFilesList(99999, 1, entityType, entityId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId, entityType]);

  const toggleUploadOpen = () => {
    setIsUploadOpen((prev) => !prev);
  };

  const refetchFiles = () => {
    fetchFilesList(99999, 1, entityType, entityId).then(() => {
      setIsUploadOpen(false);
    });
  };

  const getSelectedFile = (file: IFile | string | null) => {
    if (!file) {
      return null;
    }

    if (typeof file === "string") {
      const foundFile = (files[currentPage] ?? []).find((files) => files.fileName === file);
      return foundFile;
    }

    return file;
  };

  return (
    <div className="flex flex-col border">
      <div className="p-inputgroup flex-1">
        {UserDataService.HasRight(environments.APP_NAME, Rights.UploadFile) && (
          <Button
            icon={`pi pi-fw ${isUploadOpen ? "pi-eye-slash" : "pi-upload"}`}
            onClick={toggleUploadOpen}
            tooltip={isUploadOpen ? "Hide upload" : "Show upload"}
            tooltipOptions={{ position: "bottom", showDelay: 100, hideDelay: 0 }}
          />
        )}
        <Dropdown
          loading={isLoading}
          inputId="files-dropdown"
          value={getSelectedFile(selectedFile)}
          onChange={(e) => {
            onChangeFile(e.value || null);
          }}
          options={files[currentPage] ?? []}
          optionLabel="fileName"
          placeholder="Select file"
          filter
          filterPlaceholder={`Search file`}
          emptyFilterMessage={`No available files`}
          itemTemplate={(file) => <FileItemTemplate file={file} />}
          valueTemplate={(file, prop) => <SelectedFileTemplate file={file} prop={prop} />}
          showClear
          virtualScrollerOptions={
            (files[currentPage] || [])?.length >= 15 ? { itemSize: 43 } : undefined
          }
          pt={{
            input: {
              className: "flex items-center"
            }
          }}
        />
      </div>
      {isUploadOpen && (
        <FileUploader entityId={entityId} entityType={entityType} refetchFiles={refetchFiles} />
      )}
    </div>
  );
};
export default FilesSelect;

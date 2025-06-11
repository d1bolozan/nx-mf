import {
  FileUpload,
  FileUploadHandlerEvent,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
  ItemTemplateOptions
} from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { FC, useRef, useState } from "react";

import api from "../../api";
import logger from "../../utils/logger";
import EmptyTemplate from "./EmptyTemplate";
import FileUploaderItem from "./FileUploaderItem";
import HeaderTemplate from "./HeaderTemplate";

type FileUploaderProps = {
  entityType?: string;
  entityId?: number;
  refetchFiles: () => void;
};

const FileUploader: FC<FileUploaderProps> = ({ refetchFiles, entityId, entityType }) => {
  const toast = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<FileUpload>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const onTemplateSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    const files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e: FileUploadUploadEvent) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current?.show({ severity: "info", summary: "Success", detail: "File Uploaded" });
  };

  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const customUploadHandler = async (e: FileUploadHandlerEvent) => {
    setIsUploading(true);
    const files = e.files;

    api.files
      .upload(files, entityType, entityId)
      .then((res) => {
        if (Object.keys(res).some((key) => res[key] === null)) {
          const newErrors: Record<string, boolean> = {};
          Object.entries(res).forEach(([name, value]) => (newErrors[name] = value === null));
          setErrors(newErrors);
          toast.current?.show({
            severity: "error",
            summary: "Upload Failed",
            detail: "An error occurred while uploading the files. Please try again."
          });
          if (fileUploadRef.current) {
            const uploaderFiles = fileUploadRef.current.getFiles();
            fileUploadRef.current.setFiles(
              uploaderFiles.filter((file: File) => file.name in newErrors)
            );
          }
        } else {
          setErrors({});
          refetchFiles();
          fileUploadRef.current?.clear();
        }
      })
      .catch((error) => {
        logger.error(error);
        toast.current?.show({
          severity: "error",
          summary: "Upload Failed",
          detail: "An error occurred while uploading the files. Please try again."
        });
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  const openUploadDialog = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.getInput().click();
    }
  };

  const chooseOptions = {
    icon: `pi pi-fw pi-plus`,
    iconOnly: true,
    className: `custom-choose-btn p-button-outlined ${isUploading ? "pointer-events-none" : ""}`
  };
  const uploadOptions = {
    icon: `pi pi-fw pi-cloud-upload ${isUploading ? "pi-spin pi-spinner" : "pi-cloud-upload"}`,
    iconOnly: true,
    className: `custom-upload-btn p-button-success p-button-outlined ${
      isUploading ? "pointer-events-none" : ""
    }`
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className: `custom-cancel-btn p-button-danger p-button-outlined ${
      isUploading ? "pointer-events-none" : ""
    }`
  };

  return (
    <>
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        ref={fileUploadRef}
        id="upload-container"
        multiple
        accept="image/*,audio/*,video/*,.csv,.txt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/html,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={(options) => (
          <HeaderTemplate
            options={options}
            totalSize={fileUploadRef.current?.formatSize(totalSize) || 0}
          />
        )}
        emptyTemplate={() => <EmptyTemplate openUploadDialog={openUploadDialog} />}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
        itemTemplate={(file: object, options: ItemTemplateOptions) => (
          <FileUploaderItem
            inFile={file}
            onRemoveItem={onTemplateRemove}
            prop={options}
            errors={errors}
          />
        )}
        pt={{
          content: {
            className: "max-h-[19rem] overflow-y-auto"
          }
        }}
        customUpload
        uploadHandler={customUploadHandler}
      />
    </>
  );
};
export default FileUploader;

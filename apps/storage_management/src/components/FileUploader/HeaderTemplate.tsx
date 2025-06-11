import { FileUploadHeaderTemplateOptions } from "primereact/fileupload";
import React from "react";

type HeaderTemplateProps = {
  options: FileUploadHeaderTemplateOptions;
  totalSize: string | number;
};

const HeaderTemplate = ({ options, totalSize }: HeaderTemplateProps) => {
  const { className, chooseButton, uploadButton, cancelButton } = options;
  const formatedValue = totalSize || "0 B";

  return (
    <div
      className={className}
      style={{ backgroundColor: "transparent", display: "flex", alignItems: "center" }}
    >
      {chooseButton}
      {uploadButton}
      {cancelButton}
      <div className="ml-auto flex items-center gap-3">
        <span>{formatedValue} </span>
      </div>
    </div>
  );
};

export default HeaderTemplate;

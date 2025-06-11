
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC, useMemo, useRef } from "react";

import { IFile } from "../../types/interfaces";
import { fileTypeIcons } from "../../utils/constants/fileTypeIcons";
import FilePreview from "../FilePreview/FilePreview";

type FileItemTemplateProps = {
  file: IFile | undefined;
};
const FileItemTemplate: FC<FileItemTemplateProps> = ({ file }) => {
  const overlayRef = useRef<OverlayPanel | null>(null);

  const Icon = useMemo(() => file ? fileTypeIcons[file.mimeType] : undefined, [file]);

  if (!file) {
    return undefined;
  }

  return (
    <div className="flex items-center gap-0.5">
      <OverlayPanel
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={overlayRef}
        showCloseIcon
      >
        <div className="flex h-auto w-[300px] items-center justify-center">
          <FilePreview file={file} width={300} />
        </div>
      </OverlayPanel>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          overlayRef.current?.toggle(e);
        }}
        icon={({ iconProps }) => Icon && <Icon {...iconProps} />}
      />

      <div className="flex-1">{file?.fileName}</div>
    </div>
  );
};
export default FileItemTemplate;

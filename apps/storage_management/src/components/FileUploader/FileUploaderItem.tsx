
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ItemTemplateOptions } from "primereact/fileupload";
import { memo, SyntheticEvent, useRef, useState } from "react";

import { FileTypeEnum } from "../../types/enums/FileTypeEnum";
import { fileTypeIcons } from "../../utils/constants/fileTypeIcons";
import { formatFileSize } from "../../utils/formatFileSize";
import FilePreview from "../FilePreview/FilePreview";

type Props = {
  inFile: object;
  prop: ItemTemplateOptions & {
    onRemove: (e: SyntheticEvent<Element, Event>) => void;
  };
  onRemoveItem: (file: File, onRemove: (e: SyntheticEvent<Element, Event>) => void) => void;
  errors: Record<string, boolean>;
};
const FileUploaderItem = memo<Props>(({ inFile, onRemoveItem, prop, errors }: Props) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isOpenPreview, setIsOpenPreview] = useState<boolean>(false);
  const dialogContentRef = useRef<HTMLDivElement | null>(null);
  const file = inFile as File;
  const Icon = fileTypeIcons[file.type as FileTypeEnum];

  return (
    <div className="flex items-center gap-0.5">
      <div className="w-[2.5rem]">
        {Icon && (
          <Icon
            className="text-2xl"
            onClick={() => {
              setIsOpenPreview(true);
            }}
          />
        )}
      </div>
      <div className="flex flex-col p-1">
        <div className="text-balance text-start">{file.name}</div>
        <div className="flex items-center gap-0.5 whitespace-nowrap">
          <span>{formatFileSize(Number(file.size) || 0)}</span>
          <Badge
            severity={errors[file.name] ? "danger" : "warning"}
            value={errors[file.name] ? "Failed" : "Pending"}
          />
        </div>
      </div>
      <div className="ml-auto p-1">
        <Button
          text
          severity="danger"
          icon="pi pi-fw pi-times"
          onClick={() => onRemoveItem(file, prop.onRemove)}
        />
      </div>
      <Dialog
        resizable={false}
        header={file?.name}
        visible={isOpenPreview}
        onHide={() => {
          if (isOpenPreview) {
            setIsOpenPreview(false);
          }
        }}
        onShow={() => {
          if (dialogContentRef && dialogContentRef.current) {
            const { width, height } = dialogContentRef.current.getBoundingClientRect();

            setWidth(width);
            setHeight(height);
          }
        }}
        style={{ minWidth: "640px", minHeight: "640px", width: "75vw", height: "95%" }}
      >
        <div ref={dialogContentRef} className="flex h-full  items-center justify-center">
          <FilePreview
            file={{
              id: "temp-preview",
              createdAt: new Date().toISOString(),
              deletedAt: new Date().toISOString(),
              displayName: file?.name,
              fileName: file?.name,
              filePath: file?.name,
              mimeType: file?.type as FileTypeEnum,
              size: file.size,
              updatedAt: new Date().toISOString()
            }}
            width={width}
            height={height}
            objectURL={URL.createObjectURL(file)}
          />
        </div>
      </Dialog>
    </div>
  );
});

FileUploaderItem.displayName = "FileUploaderItem";

export default FileUploaderItem;

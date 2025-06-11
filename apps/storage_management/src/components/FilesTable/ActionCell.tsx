
import { Button } from "primereact/button";

import { IFile } from "../../types/interfaces";

type Props = {
  file: IFile;
  onDeleteFile: (file: IFile) => void;
};

const ActionCell = ({ file, onDeleteFile }: Props) => {
  return (
    <Button
      text
      icon="pi pi-fw pi-trash"
      severity="danger"
      tooltip="Delete"
      tooltipOptions={{ position: "bottom", showDelay: 100, hideDelay: 0 }}
      onClick={(e) => {
        e.stopPropagation();
        onDeleteFile(file);
      }}
    />
  );
};

export default ActionCell;

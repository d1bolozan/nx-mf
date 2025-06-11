
import { DropdownProps } from "primereact/dropdown";
import { FC } from "react";

import { IFile } from "../../types/interfaces";
import FileItemTemplate from "./FileItemTemplate";

type SelectedFileTemplateProps = {
  file: IFile | undefined;
  prop: DropdownProps;
};
const SelectedFileTemplate: FC<SelectedFileTemplateProps> = ({ file, prop }) => {
  if (file) {
    return <FileItemTemplate file={file} />;
  }

  return <span>{prop.placeholder}</span>;
};
export default SelectedFileTemplate;

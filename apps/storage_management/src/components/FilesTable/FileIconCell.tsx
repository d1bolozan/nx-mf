import { FileTypeEnum } from "../../types/enums/FileTypeEnum";
import { fileTypeIcons } from "../../utils/constants/fileTypeIcons";

type Props = {
  type: FileTypeEnum;
};

const FileIconCell = ({ type }: Props) => {
  const Icon = fileTypeIcons[type];

  if (Icon) {
    return <Icon className="text-2xl" />;
  }

  return undefined;
};

export default FileIconCell;

import { FileTypeEnum } from "../enums/FileTypeEnum";


export interface IFile {
  id: string;
  displayName: string;
  fileName: string;
  filePath: string;
  mimeType: FileTypeEnum;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  size: number;
}

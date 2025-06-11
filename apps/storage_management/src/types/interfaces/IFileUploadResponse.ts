import { IFile } from "./IFIle";

export interface IFileUploadResponse {
  [fileName: string]: IFile | null;
}

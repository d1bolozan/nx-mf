import { IconType } from "react-icons";
import { BsFiletypeJson, BsFiletypeXml } from "react-icons/bs";
import {
  FaRegFileExcel,
  FaRegFilePdf,
  FaRegFilePowerpoint,
  FaRegFileWord,
  FaRegImage
} from "react-icons/fa";
import {
  PiFileAudio,
  PiFileCsv,
  PiFileHtml,
  PiFileJs,
  PiFileMd,
  PiFilePng,
  PiFileSvg,
  PiFileText,
  PiFileZip,
  PiVideo
} from "react-icons/pi";

import { FileTypeEnum } from "../../types/enums/FileTypeEnum";

export const fileTypeIcons: Record<FileTypeEnum, IconType> = {
  [FileTypeEnum.CSV]: PiFileCsv,
  [FileTypeEnum.EXCEL]: FaRegFileExcel,
  [FileTypeEnum.HTML]: PiFileHtml,
  [FileTypeEnum.IMAGE]: FaRegImage,
  [FileTypeEnum.JS]: PiFileJs,
  [FileTypeEnum.JSON]: BsFiletypeJson,
  [FileTypeEnum.MARKDOWN]: PiFileMd,
  [FileTypeEnum.MP3]: PiFileAudio,
  [FileTypeEnum.PDF]: FaRegFilePdf,
  [FileTypeEnum.PNG]: PiFilePng,
  [FileTypeEnum.POWERPOINT]: FaRegFilePowerpoint,
  [FileTypeEnum.SVG]: PiFileSvg,
  [FileTypeEnum.TEXT]: PiFileText,
  [FileTypeEnum.VIDEO]: PiVideo,
  [FileTypeEnum.WORD]: FaRegFileWord,
  [FileTypeEnum.XML]: BsFiletypeXml,
  [FileTypeEnum.ZIP]: PiFileZip,
  [FileTypeEnum.WAV]: PiFileAudio
};

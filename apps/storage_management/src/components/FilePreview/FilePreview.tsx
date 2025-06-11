import "react-h5-audio-player/lib/styles.css";

import { Loader } from "@nx-mf/ui";
import { Image } from "primereact/image";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import ReactPlayer from "react-player";

import api from "../../api";
import { FileTypeEnum } from "../../types/enums/FileTypeEnum";
import { IFile } from "../../types/interfaces";
import logger from "../../utils/logger";
import DocumentPreview from "./DocumentPreview";

type Props = {
  file?: IFile;
  width?: number | string;
  height?: number | string;
  objectURL?: string;
};

const FilePreview = ({ file, width = "auto", height = "auto", objectURL }: Props) => {
  const [isLoadingFile, setIsLoadingFile] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (objectURL) {
      setFileUrl(objectURL);
    } else {
      const getFile = () => {
        if (!file) {
          return;
        }
        setIsLoadingFile(true);
        api.files
          .get(file.id)
          .then((blob) => {
            const src = URL.createObjectURL(blob);
            setFileUrl(src);
          })
          .catch((error) => {
            logger.error(error);
            setFileUrl(undefined);
          })
          .finally(() => {
            setIsLoadingFile(false);
          });
      };

      getFile();
    }
  }, [file, objectURL]);

  if (!file) {
    return undefined;
  }

  if (isLoadingFile) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (file.mimeType.includes("video")) {
    return (
      <div className="relative h-full w-full">
        <ReactPlayer
          fallback={<Loader />}
          controls
          playing
          url={fileUrl}
          width={width}
          height={height}
        />
      </div>
    );
  }
  if (file.mimeType.includes("audio")) {
    return (
      <AudioPlayer
        progressJumpSteps={{
          forward: 10000,
          backward: 10000
        }}
        autoPlay
        src={fileUrl}
      />
    );
  }
  if (file.mimeType.includes("image")) {
    return (
      <Image
        imageStyle={{
          width:
            file.mimeType === FileTypeEnum.SVG && typeof width === "string" ? width + "px" : width,
          height:
            file.mimeType === FileTypeEnum.SVG && typeof height === "string"
              ? height + "px"
              : height,
          objectFit: "contain"
        }}
        src={fileUrl}
        className="h-auto max-w-full"
      />
    );
  }

  return <DocumentPreview fileName={file.fileName} fileUrl={fileUrl || ""} />;
};

export default FilePreview;

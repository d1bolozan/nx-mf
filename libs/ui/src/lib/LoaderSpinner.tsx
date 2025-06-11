import "../App.css";

import { ProgressSpinner } from "primereact/progressspinner";
import { FC } from "react";
type LoaderProps = {
  width?: string;
  height?: string;
};

const Loader: FC<LoaderProps> = ({ height, width }) => {
  return (
    <div className="z-30 flex h-full w-full items-center justify-center opacity-60">
      <ProgressSpinner style={{ width: width, height: height }} className="animate-pulse" />
    </div>
  );
};

export default Loader;

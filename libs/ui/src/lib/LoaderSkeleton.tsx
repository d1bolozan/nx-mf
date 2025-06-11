import "../App.css";

import { Skeleton } from "primereact/skeleton";

const LoaderSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-col  gap-1">
      <Skeleton className="w-full"></Skeleton>
      <Skeleton className="w-2/3"></Skeleton>
      <Skeleton className="w-1/2"></Skeleton>
      <Skeleton className="w-full"></Skeleton>
    </div>
  );
};

export default LoaderSkeleton;

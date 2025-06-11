import "../App.css";

import { Skeleton } from "primereact/skeleton";
import { FC } from "react";
type LoadingNavbarProps = {
  isOpen: boolean;
};
const LoadingNavbar: FC<LoadingNavbarProps> = ({ isOpen }) => {
  return (
    <div className="card">
      <div className="border-round border-1 surface-border p-2">
        <ul className="m-0 w-full list-none p-0">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="mb-3">
                <div className="flex items-center">
                  <Skeleton shape="circle" size="1.5rem" className="mr-1" />
                  {isOpen && (
                    <div className="flex h-full w-full items-center justify-center">
                      <Skeleton />
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default LoadingNavbar;

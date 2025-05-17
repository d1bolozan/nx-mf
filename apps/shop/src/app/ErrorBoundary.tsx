"use client";

import { FC, PropsWithChildren } from "react";
import { ErrorBoundary as ReactErrorBoundary, FallbackProps,  } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}


const ErrorBoundary: FC<PropsWithChildren> = ({children}) => {
 return <ReactErrorBoundary FallbackComponent={Fallback}>
  {children}
 </ReactErrorBoundary>
}
export default ErrorBoundary;


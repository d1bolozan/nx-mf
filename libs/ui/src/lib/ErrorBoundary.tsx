// import "../App.css";

// import React, { ReactNode, useEffect, useState } from "react";

// import { logger } from "../utils/logger";

// interface ErrorBoundaryProps {
//   children: ReactNode;
//   showMessage?: boolean
// }

// const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, showMessage = true }) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const errorHandler = (error: ErrorEvent): void => {
//       logger.error("Error caught by error boundary:", error.error);
//       setHasError(true);
//     };

//     window.addEventListener("error", errorHandler);

//     return () => {
//       window.removeEventListener("error", errorHandler);
//     };
//   }, []);

//   if (hasError || !children) {
//     if (!showMessage) {
//       return <></>;
//     }

//     return (
//       <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
//         <h1 className="text-4xl font-bold">Whoops, that's our bad!</h1>
//         <p className="p-text-secondary">We're not sure what happened, but something went wrong!</p>
//         <p className="text-xl">Please either refresh the page or return home to try again.</p>
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default ErrorBoundary;

import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback(this.state.error as Error) : null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

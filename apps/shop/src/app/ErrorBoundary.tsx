'use client';

import { FC, PropsWithChildren } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import { NothingFoundBackground } from '../components/404/NothingFound';

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  console.error(error.message);

  return (
    <NothingFoundBackground resetErrorBoundary={() => resetErrorBoundary()} />
  );
}

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
};
export default ErrorBoundary;

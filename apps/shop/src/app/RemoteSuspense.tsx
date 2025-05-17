import { FC, PropsWithChildren, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Loader from './Loader';

const RemoteSuspense: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default RemoteSuspense;

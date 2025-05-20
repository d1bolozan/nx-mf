import React, { useCallback, useEffect, useState } from 'react';
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import RemoteSuspense from './RemoteSuspense';
import NxWelcome from './nx-welcome';
import Layout from './Layout';
import { useNavigation } from '@nx-mf/navigation';
import Loader from './Loader';
import { NothingFoundBackground } from '../components/404/NothingFound';
/**
 * TODO: Inspect why types cannot be exported from the `@nx-mf/navigation` library.
 *
 * Possible reasons to investigate:
 * - The types may not be explicitly exported in the `@nx-mf/navigation` package's entry point (e.g., `index.ts`).
 * - The types might be defined in a file that is not re-exported or included in the package's public API.
 * - There could be issues with the TypeScript configuration (`tsconfig.json`) or package build setup that prevent type definitions from being generated or published.
 * - The package might be exporting types only as type-only exports, which could cause issues with certain import syntaxes.
 * - Check if the types are available in a separate package (e.g., `@nx-mf/navigation-types`) and ensure correct installation and import.
 *
 * Action items:
 * - Review the `@nx-mf/navigation` source code and ensure all necessary types are exported.
 * - Verify the package's `package.json` includes the correct `types` or `typings` field.
 * - Ensure the build process emits type declarations (`.d.ts` files).
 * - If using a separate types package, confirm it is installed and imported correctly.
 */
// import type { IRoute } from '@nx-mf/navigation-types';

const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));
const FlowEditor = React.lazy(() => import('flow_editor/Module'));
const Chat = React.lazy(() => import('chat/Module'));

const staticRoutes = [
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />,
    label: '',
  },
  {
    path: '/404',
    element: <NothingFoundBackground />,
    label: '',
  },
  {
    path: '/',
    element: <Layout />,
    label: '',
    children: [
      { label: '', path: '', element: <NxWelcome title="shop" /> },
      {
        label: '',
        path: 'products/*',
        element: (
          <RemoteSuspense>
            <Products />
          </RemoteSuspense>
        ),
      },
      {
        label: '',
        path: 'cart/*',
        element: (
          <RemoteSuspense>
            <Cart />
          </RemoteSuspense>
        ),
      },
      {
        label: '',
        path: 'checkout/*',
        element: (
          <RemoteSuspense>
            <Checkout />
          </RemoteSuspense>
        ),
      },
      {
        label: '',
        path: 'flow-editor/*',
        element: (
          <RemoteSuspense>
            <FlowEditor />
          </RemoteSuspense>
        ),
      },
      {
        label: '',
        path: 'chat/*',
        element: (
          <RemoteSuspense>
            <Chat />
          </RemoteSuspense>
        ),
      },
    ],
  },
];

const handleCreateRouter = (routes: unknown[]): RouteObject[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return routes.map(({ element, path, children }: any) => ({
    path,
    element,
    children:
      children && children.length > 0
        ? handleCreateRouter(children)
        : undefined,
  }));
};

export function App() {
  const { routes, initializeRoutes, isLoadingNavigation } = useNavigation();

  useEffect(() => {
    initializeRoutes(staticRoutes);
  }, []);

  if (isLoadingNavigation) {
    return <Loader />;
  }

  return (
    routes.length > 0 && (
      <RouterProvider
        router={createBrowserRouter(handleCreateRouter(routes))}
      />
    )
  );
}

export default App;

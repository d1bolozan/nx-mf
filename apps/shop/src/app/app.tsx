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
import { useNavigation, type IRoute } from '@nx-mf/navigation';
import Loader from './Loader';
import { NothingFoundBackground } from '../components/404/NothingFound';

const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));
const FlowEditor = React.lazy(() => import('flow_editor/Module'));
const Chat = React.lazy(() => import('chat/Module'));

const staticRoutes: IRoute[] = [
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

const handleCreateRouter = (routes: IRoute[]): RouteObject[] => {
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

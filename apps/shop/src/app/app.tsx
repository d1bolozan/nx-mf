import { type IRoute, useNavigation } from "@nx-mf/navigation";
import React, { useEffect } from "react";
import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from "react-router-dom";

import { NothingFoundBackground } from "../components/404/NothingFound";
import Home from "./Home";
import Layout from "./Layout";
import Loader from "./Loader";
import RemoteSuspense from "./RemoteSuspense";

const Products = React.lazy(() => import("products/Module"));
const Cart = React.lazy(() => import("cart/Module"));
const Checkout = React.lazy(() => import("checkout/Module"));
const FlowEditor = React.lazy(() => import("flow_editor/Module"));
const Chat = React.lazy(() => import("chat/Module"));
const StorageManagement = React.lazy(() => import("storage_management/Module"));

const staticRoutes: IRoute[] = [
  {
    path: "*",
    element: <Navigate to="/404" replace={true} />,
    label: ""
  },
  {
    path: "/404",
    element: <NothingFoundBackground />,
    label: ""
  },
  {
    path: "/",
    element: <Layout />,
    label: "",
    children: [
      { label: "", path: "", element: <Home /> },
      {
        label: "",
        path: "products/*",
        element: (
          <RemoteSuspense>
            <Products />
          </RemoteSuspense>
        )
      },
      {
        label: "",
        path: "cart/*",
        element: (
          <RemoteSuspense>
            <Cart />
          </RemoteSuspense>
        )
      },
      {
        label: "",
        path: "checkout/*",
        element: (
          <RemoteSuspense>
            <Checkout />
          </RemoteSuspense>
        )
      },
      {
        label: "",
        path: "flow-editor/*",
        element: (
          <RemoteSuspense>
            <FlowEditor />
          </RemoteSuspense>
        )
      },
      {
        label: "",
        path: "chat/*",
        element: (
          <RemoteSuspense>
            <Chat />
          </RemoteSuspense>
        )
      },
      {
        label: "",
        path: "storage-management/*",
        element: (
          <RemoteSuspense>
            <StorageManagement />
          </RemoteSuspense>
        )
      }
    ]
  }
];

const handleCreateRouter = (routes: IRoute[]): RouteObject[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return routes.map(({ element, path, children }: any) => ({
    path,
    element,
    children: children && children.length > 0 ? handleCreateRouter(children) : undefined
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
    routes.length > 0 && <RouterProvider router={createBrowserRouter(handleCreateRouter(routes))} />
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RemoteSuspense from './RemoteSuspense';
import NxWelcome from './nx-welcome';
import Layout from './Layout';

const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));
const FlowEditor = React.lazy(() => import('flow_editor/Module'));

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RemoteSuspense>
            <Layout />
          </RemoteSuspense>
        }
      >
        <Route index element={<NxWelcome title="Welcome to home page" />} />
        <Route
          path="/products"
          element={
            <RemoteSuspense>
              <Products />
            </RemoteSuspense>
          }
        />
        <Route
          path="/cart"
          element={
            <RemoteSuspense>
              <Cart />
            </RemoteSuspense>
          }
        />
        <Route
          path="/checkout"
          element={
            <RemoteSuspense>
              <Checkout />
            </RemoteSuspense>
          }
        />
        <Route
          path="/flow-editor"
          element={
            <RemoteSuspense>
              <FlowEditor />
            </RemoteSuspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

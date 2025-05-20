import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import RemoteSuspense from './RemoteSuspense';
import NxWelcome from './nx-welcome';
import Layout from './Layout';
import { NothingFoundBackground } from '../components/404/NothingFound';

const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));
const FlowEditor = React.lazy(() => import('flow_editor/Module'));
const Chat = React.lazy(() => import('chat/Module'));

export function App() {
  const navigate = useNavigate();

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
        <Route
          path="/chat"
          element={
            <RemoteSuspense>
              <Chat />
            </RemoteSuspense>
          }
        />
        <Route
          path="/404"
          element={
            <NothingFoundBackground
              onNavigateToHomePage={() => navigate('/')}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/404" replace={true} />} />
    </Routes>
  );
}

export default App;

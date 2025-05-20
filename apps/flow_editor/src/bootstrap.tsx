import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { MantineProvider } from '@mantine/core';

import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <div className="w-full h-screen overflow-hidden">
          <App />
        </div>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);

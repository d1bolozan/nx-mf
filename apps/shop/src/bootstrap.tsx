import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import './styles.css';
import { NavigationProvider } from '@nx-mf/navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MantineProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </MantineProvider>
  </StrictMode>
);

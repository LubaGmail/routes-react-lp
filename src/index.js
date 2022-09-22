import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { FavContextProvider } from './store/fav-context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <FavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>
);

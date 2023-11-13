import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/index.css';
import { Search } from '@pages/index.ts';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
);

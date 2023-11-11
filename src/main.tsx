import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/index.css';
import { Placeholder } from '@pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Placeholder />
  </React.StrictMode>,
);

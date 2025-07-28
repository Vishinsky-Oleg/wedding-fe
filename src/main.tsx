import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Info } from 'pages/Info';
import { App } from 'app';
import './main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path=":id" element={<App />} />
        <Route path="*" element={<Info variant={'page-not-found'} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

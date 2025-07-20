import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PageNotFound } from 'pages/PageNotFound';
import { App } from 'pages/App';
import { Survey } from 'pages/Survey';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<PageNotFound />} />
        <Route path=":id" element={<App />} />
        <Route path=":id/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

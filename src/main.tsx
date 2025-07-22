import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PageNotFound } from 'pages/PageNotFound';
import { App } from 'app';
import { Poll } from 'pages/Poll';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path=":id" element={<App />} />
        <Route path=":id/survey" element={<Poll />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

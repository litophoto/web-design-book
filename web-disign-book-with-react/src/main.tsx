import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './pages/root';
import ErrorPage from './pages/ErrorPage';
import Top from './pages/Top';
import Index from './components/YankeeHedgehog/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Index",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Top",
    element: <Top />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

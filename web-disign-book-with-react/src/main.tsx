import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Top from "./pages/Top";
import Index from "./components/YankeeHedgehog/Index";
// import Todos from "./components/Todos/pages/Index";
import Todos from "./applications/Todos/Todos";

const router = createBrowserRouter([
  {
    path: "/Index",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Top />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Application/Todos",
    element: <Todos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

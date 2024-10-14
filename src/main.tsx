import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <div>Error or 404</div>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
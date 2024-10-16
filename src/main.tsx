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
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ServicesPage from "./pages/Services";
import OrganizationPage from "./pages/Organization";

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
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/organization",
    element: <OrganizationPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FloatingWhatsApp
      accountName="eventprestige"
      phoneNumber="+255 764 811 412"
      notification
      avatar="/images/IMG-20241014-WA0032.jpg"
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
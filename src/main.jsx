import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import APropos from "./pages/APropos/APropos.jsx";
import Logement from "./pages/Logement/Logement.jsx";
// Header & Footer
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/apropos",
        element: <APropos />,
      },
      {
        // path: "/logement/:id",
        path: "/logement",
        element: <Logement />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

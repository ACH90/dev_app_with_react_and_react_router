import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import APropos from "./pages/APropos/APropos.jsx";
import Logement from "./pages/Logement/Logement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/a-propos",
    element: <APropos />,
  },
  {
    // path: "/logement/:id",
    path: "/logement",
    element: <Logement />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

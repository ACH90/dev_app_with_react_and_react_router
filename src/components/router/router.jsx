import { createBrowserRouter, Navigate } from "react-router-dom";
// Pages
import Home from "/src/pages/Home/Home.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage.jsx";
import APropos from "/src/pages/APropos/APropos.jsx";
import Logement from "/src/pages/Logement/Logement.jsx";
// Layout
import MainLayout from "/src/layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Accueil" replace />,
  },
  {
    path: "/Accueil",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "apropos",
        element: <APropos />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;

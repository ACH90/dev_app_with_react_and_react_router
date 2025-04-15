import { createBrowserRouter } from "react-router-dom";
// Pages
import Home from "/src/pages/Home/Home.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage.jsx";
import APropos from "/src/pages/APropos/APropos.jsx";
import Logement from "/src/pages/Logement/Logement.jsx";
// Header & Footer
import MainLayout from "/src/layouts/MainLayout.jsx";

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
        path: "/logement/:id",
        element: <Logement />,
      },
    ],
  },
]);

export default router;

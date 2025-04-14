import { Outlet } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import Footer from "/src/components/footer/footer.jsx";

export default function MainLayout() {
  return (
    <div className="page-container">
      <Header />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

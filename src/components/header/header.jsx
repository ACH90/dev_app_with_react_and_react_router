import style from "./header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <nav className={style.header}>
        <img src="/public/logo.png" alt="logo" className={style.img} />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

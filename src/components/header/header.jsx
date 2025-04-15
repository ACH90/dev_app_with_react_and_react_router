import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <nav className={style.header}>
        <img src="/public/logo.png" alt="logo" className={style.img} />
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/apropos">A propos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

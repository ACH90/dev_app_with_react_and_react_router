const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Kasa</h1>
      <nav>
        <ul className="header__nav">
          <li className="header__nav__item">
            <a href="/">Accueil</a>
          </li>
          <li className="header__nav__item">
            <a href="/a-propos">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

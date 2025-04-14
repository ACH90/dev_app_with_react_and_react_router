import logo from "/src/assets/LOGO2.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo du footer" />
      </div>
      <div className={styles.div}>
        <p className={styles.p}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

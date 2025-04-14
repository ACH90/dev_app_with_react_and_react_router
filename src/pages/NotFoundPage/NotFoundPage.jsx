import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;

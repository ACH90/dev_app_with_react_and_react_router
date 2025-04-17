import styles from "./Aporpos.module.scss";
import Collapse from "/src/components/collapse/Collapse";

const APropos = () => {
  return (
    <div className={styles.apropos}>
      <div className={styles.banner}></div>
      <div className={styles.collapseContainer}>
        <Collapse
          title="Fiabilité"
          content="Les annonces postées garantissent une fiabilité totale"
          className="collapseLarge"
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entrainera 
          une exclusion de notre plateforme."
          className="collapseLarge"
        />
        <Collapse
          title="Services"
          content="La qualité du service..."
          className="collapseLarge"
        />
        <Collapse
          title="Sécurité"
          content="La sécurité..."
          className="collapseLarge"
        />
      </div>
    </div>
  );
};

export default APropos;

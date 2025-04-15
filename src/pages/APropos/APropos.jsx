import styles from "./Aporpos.module.scss";
import Collapse from "/src/components/collapse/Collapse";

const APropos = () => {
  return (
    <div className={styles.apropos}>
      <div className={styles.banner}></div>
      <div>
        <Collapse
          title="Fiabilité"
          content="Les annonces postées garantissent une fiabilité totale"
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entrainera 
          une exclusion de notre plateforme."
        />
        <Collapse title="Services" content="La qualité du service..." />
        <Collapse title="Sécurité" content="La sécurité..." />
      </div>
    </div>
  );
};

export default APropos;

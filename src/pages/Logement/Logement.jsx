import { useParams } from "react-router-dom";
import logements from "/src/data/logements.json";
import Slideshow from "/src/components/slideshow/slideshow";
import style from "./logement.module.scss";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <p>Logement introuvable.</p>;
  }

  return (
    <div className={style.logementContainer}>
      <div className={style.SlideshowContainer}>
        <Slideshow />
      </div>
      {/* Titre et localisation */}
      <div>
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
      </div>
      {/* Host */}
      <div>
        <h3>{logement.host.name}</h3>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      {/* Tags */}
      <div>
        {logement.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      {/* Rate */}
      <p>{logement.rating}</p>
      {/* Description */}
      <p>{logement.description}</p>
      {/* Equipements */}
      <div>
        {logement.equipments.map((equipment) => (
          <p key={equipment}>{equipment}</p>
        ))}
      </div>
      <p>Puis le reste de la page à afficher</p>
    </div>
  );
};

export default Logement;

import { useParams } from "react-router-dom";
import logements from "/src/data/logements.json";
import Slideshow from "/src/components/slideshow/slideshow";
import style from "./logement.module.scss";
import Collapse from "/src/components/collapse/collapse";
import Rate from "/src/components/rate/rate";
import Tags from "/src/components/tags/tags";

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
      <div>
        {/* Titre et localisation */}
        <div className={style.titleContainer}>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
        </div>
        {/* Tags */}
        <Tags tags={logement.tags} />
      </div>
      <div>
        {/* Host */}
        <div className={style.hostContainer}>
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        {/* Rate */}
        <Rate logement={logement} />
      </div>
      {/* Description */}
      <Collapse title="Description" content={logement.description} />
      {/* Equipements */}
      <div>
        <Collapse
          title="Description"
          content={logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
};

export default Logement;

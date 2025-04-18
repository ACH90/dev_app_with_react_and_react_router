import { useParams } from "react-router-dom";
import logements from "/src/data/logements.json";
import Slideshow from "/src/components/slideshow/slideshow";
import style from "./logement.module.scss";
import Collapse from "/src/components/collapse/collapse";
import Rate from "/src/components/rate/rate";
import Tags from "/src/components/tags/tags";
import { Navigate } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div className={style.logementContainer}>
      <div className={style.SlideshowContainer}>
        <Slideshow />
      </div>
      <div className={style.proprietiesContainer}>
        <div>
          {/* Titre et localisation */}
          <div className={style.titleContainer}>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          {/* Tags */}
          <Tags tags={logement.tags} />
        </div>
        <div className={style.hostRateContainer}>
          {/* Host */}
          <div className={style.hostContainer}>
            <h3>
              {logement.host.name.split(" ").map((part, index) => (
                <span key={index}>
                  {part}
                  <br />
                </span>
              ))}
            </h3>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className={style.hostPicture}
            />
          </div>
          {/* Rate */}
          <Rate logement={logement} />
        </div>
      </div>
      <div className={style.collapseContainer}>
        {/* Description */}
        <Collapse
          title="Description"
          content={logement.description}
          className="collapseMedium"
        />
        {/* Equipements */}
        <Collapse
          title="Equipements"
          content={logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
          className="collapseMedium"
        />
      </div>
    </div>
  );
};

export default Logement;

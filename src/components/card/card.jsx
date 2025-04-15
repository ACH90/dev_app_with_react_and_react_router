import style from "./card.module.scss";
import logements from "/src/data/logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  console.log(logements);
  return (
    <>
      {logements.map((logement) => (
        <div key={logement.id} className={style.cardContainer}>
          <div className={style.card}>
            <Link to={`/logement/${logement.id}`} className={style.link}>
              <img
                src={logement.cover}
                alt={`Logement ${logement.title}`}
                className={style.image}
              />
              <div className={style.containerTitle}>
                <p className={style.title}>{logement.title}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

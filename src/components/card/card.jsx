import style from "./card.module.scss";
import logements from "/src/data/logements.json";

const Card = () => {
  console.log(logements);
  return (
    <>
      {logements.map((logement) => (
        <div key={logement.id} className={style.cardContainer}>
          <div className={style.card}>
            <img
              src={logement.cover}
              alt={`Logement ${logement.title}`}
              style={{
                width: "100%",
              }}
            />
            <div className={style.containerTitle}>
              <p className={style.title}>{logement.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

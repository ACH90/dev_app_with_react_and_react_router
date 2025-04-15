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
                maxWidth: "300px",
                marginTop: "10px",
              }}
            />
            <p>{logement.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

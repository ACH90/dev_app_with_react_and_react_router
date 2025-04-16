import style from "./rate.module.scss";
import emptyStar from "/src/assets/empty-star.png";
import rateStar from "/src/assets/rate-star.png";

/**
 *
 * @param {object} logement sélectionné du tableau json
 * @returns affichage section pitch du logement
 */
function Rate({ logement }) {
  /* initialisation de la table de rating */
  const ratingTab = [];
  for (let i = 0; i < 5; i++) {
    ratingTab.push(i < logement.rating ? rateStar : emptyStar);
  }

  return (
    <section className={style.pitchContainer}>
      <article className={style.owner}>
        <div className={style.rating}>
          {ratingTab.map((elt, index) => (
            <img key={index} src={elt} alt="rating star" />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Rate;

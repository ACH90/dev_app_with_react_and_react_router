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
    <section className="pitch-container">
      <article className={style.caracteristics}>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="tagsList">
          {logement.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </article>

      <article className="owner">
        <div className="profil">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="" />
        </div>
        <div className="rating">
          {ratingTab.map((elt, index) => (
            <img key={index} src={elt} alt="rating star" />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Rate;

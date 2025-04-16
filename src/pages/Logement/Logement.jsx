import Slideshow from "/src/components/slideshow/slideshow";
import style from "./logement.module.scss";

const Logement = () => {
  return (
    <div>
      <div className={style.SlideshowContainer}>
        <Slideshow />
      </div>

      <p>Puis le reste de la page à afficher</p>
    </div>
  );
};

export default Logement;

import { useParams } from "react-router-dom";
import { useState } from "react";
import logements from "/src/data/logements.json";
import styles from "./Slideshow.module.scss"; // crée ce fichier pour le styliser

const Slideshow = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <p>Logement introuvable.</p>;
  }

  const pictures = logement.pictures;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.slideshow}>
      {pictures.length > 1 && (
        <>
          <button onClick={handlePrev} className={styles.prev}>
            ❮
          </button>
          <button onClick={handleNext} className={styles.next}>
            ❯
          </button>
          <div className={styles.counter}>
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`${logement.title} - image ${currentIndex + 1}`}
        className={styles.image}
      />
    </div>
  );
};

export default Slideshow;

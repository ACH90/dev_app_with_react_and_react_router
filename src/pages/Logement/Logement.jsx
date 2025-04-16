import { useParams } from "react-router-dom";
import logements from "/src/data/logements.json"; // ou ton fichier réel
import Slideshow from "/src/components/slideshow/slideshow";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <p>Logement introuvable.</p>;
  }

  return (
    <div>
      <Slideshow />
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* etc... */}
    </div>
  );
};

export default Logement;

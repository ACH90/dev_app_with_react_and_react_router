import { useParams } from "react-router-dom";
import logements from "/src/data/logements.json";

const Slideshow = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <p>Logement introuvable.</p>;
  }
  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* etc... */}
    </div>
  );
};

export default Slideshow;

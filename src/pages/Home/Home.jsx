import styles from "./Home.module.scss";
import Card from "/src/components/card/card.jsx";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.banner}>
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <section className={styles.locationCards}>
          <Card />
        </section>
      </div>
    </>
  );
};

export default Home;

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.banner}>
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <section className={styles.locationCards}>
          <p>Toutes les localisations</p>
        </section>
      </div>
    </>
  );
};

export default Home;

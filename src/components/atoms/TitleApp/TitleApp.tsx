import styles from "./TitleApp.module.scss";

const TitleApp = () => (
  <h1 className={styles.title}>
    <span className={styles.title__firstLine}>The Movie</span>
    <span className={styles.title__secondLine}> Guesser</span>
  </h1>
);

export default TitleApp;

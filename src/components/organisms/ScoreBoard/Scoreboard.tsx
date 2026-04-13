import styles from "./ScoreBoard.module.scss";

const ScoreBoard = () => {
  return (
    <section className={styles.scoreboard}>
      <div className={styles.scoreboard__Header}>
        <h4>Scoreboard</h4>
        <span>Add another player, it’s sad playing alone :(</span>
      </div>
      <div className={styles.scoreboard__Body}>
        <p>
          Waiting for players<span>...</span>
        </p>
      </div>
    </section>
  );
};

export default ScoreBoard;

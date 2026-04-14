import styles from "./ScoreTable.module.scss";

const ScoreTable = () => {
  return (
    <table className={styles.ScoreTable}>
      <thead className={styles.ScoreTable__header}>
        <tr className={styles.ScoreTable__headerRow}>
          <th>Player</th>
          <th>Movies Guessed</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody className={styles.ScoreTable__body}>
        <tr className={styles.ScoreTable__bodyRow}>
          <th>player name</th>
          <th>moview, moview, moview</th>
          <th>100</th>
        </tr>
        <tr className={styles.ScoreTable__bodyRow}>
          <th>player name</th>
          <th>moview, moview, moview</th>
          <th>100</th>
        </tr>
        <tr className={styles.ScoreTable__bodyRow}>
          <th>player name</th>
          <th>moview, moview, moview</th>
          <th>100</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreTable;

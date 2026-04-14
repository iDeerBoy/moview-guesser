import type { Player } from "@/store/PlayersDataSlice";
import styles from "./ScoreTable.module.scss";

interface ScoreTableProps {
  players: Player[];
}

const ScoreTable: React.FC<ScoreTableProps> = ({ players }) => {
  const playerSorted = [...players].sort((a, b) => a.score - b.score);

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
        {playerSorted.map(player => (
          <tr className={styles.ScoreTable__bodyRow} key={player.id}>
            <th>{player.name}</th>
            <th>
              {player.moviewsGuessed.length
                ? player.moviewsGuessed.map(
                    (moview, index) =>
                      `${moview}${index === player.moviewsGuessed.length ? ", " : "."}`
                  )
                : "no guessed yet."}
            </th>
            <th>{player.score}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;

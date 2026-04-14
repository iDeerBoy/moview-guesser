import ScoreTable from "@/components/molecules/ScoreTable/ScoreTable";
import styles from "./ScoreBoard.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const ScoreBoard = () => {
  const { players } = useSelector((state: RootState) => state.playersData);

  return (
    <section className={styles.scoreboard}>
      <div className={styles.scoreboard__Header}>
        <h4>Scoreboard</h4>
      </div>
      <div className={styles.scoreboard__Body}>
        {players.length ? (
          <ScoreTable players={players} />
        ) : (
          <p>
            Waiting for players<span>...</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default ScoreBoard;

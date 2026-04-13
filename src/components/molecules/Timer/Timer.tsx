import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import styles from "./Timer.module.scss";

const Timer = () => {
  return (
    <GrayContainer cornerPlain="bottom-left">
      <div className={styles.Timer}>
        <div className={styles.Timer__seconds}>
          <span className={styles.Timer__secondsInt}>90</span>
          <p className={styles.Timer__secondsText}>seconds</p>
        </div>
        <div className={styles.Timer__players}>
          <h4>Who guessed?</h4>
          <ul className={styles.Timer__playersList}>
            <li>
              <button>XX</button>
            </li>
            <li>
              <button>XX</button>
            </li>
            <li>
              <button>XX</button>
            </li>
            <li>
              <button>XX</button>
            </li>
          </ul>
          <button className={styles.Timer__noneButton}>None</button>
        </div>
      </div>
    </GrayContainer>
  );
};

export default Timer;

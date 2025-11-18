import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import styles from "./Start.module.scss";
import Button from "@/components/atoms/Button/Button";
import plusIcon from "@/assets/icons/plus.svg";

const Start = () => {
  return (
    <GrayContainer cornerPlain="bottom-left">
      <div className={styles.Start}>
        <p className={styles.Start__subText}>Add players to play.</p>
        <form className={styles.Start__form} onSubmit={e => e.preventDefault()}>
          <input
            className={styles.Start__input}
            type="text"
            placeholder="Player Name"
          />
          <button className={styles.Start__submit} type="submit">
            <img src={plusIcon} alt="Add Player" />
          </button>
        </form>
        <ul className={styles.Start__players}>
          <li>Player X</li>
          <li>Player X</li>
          <li>Player X</li>
        </ul>
        <Button
          text="Start"
          onClick={() => console.log("Button")}
          cornerPlain="bottom-left"
        />
      </div>
    </GrayContainer>
  );
};

export default Start;

import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import styles from "./Start.module.scss";
import Button from "@/components/atoms/Button/Button";
import plusIcon from "@/assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useCallback, useState } from "react";
import { addNewPlayer } from "@/store/PlayersDataSlice";

const Start = () => {
  const dispatch = useDispatch();
  const { playersData } = useSelector((state: RootState) => state);
  const [newPlayerName, setNewPlayName] = useState<string>("");

  const addPlayer = useCallback(() => {
    dispatch(addNewPlayer(newPlayerName));
    setNewPlayName("");
  }, [newPlayerName]);

  return (
    <GrayContainer cornerPlain="bottom-left">
      <div className={styles.Start}>
        <p className={styles.Start__subText}>Add players to play.</p>
        <form
          className={styles.Start__form}
          onSubmit={e => {
            e.preventDefault();
            addPlayer();
          }}
        >
          <input
            className={styles.Start__input}
            type="text"
            placeholder="Player Name"
            value={newPlayerName}
            onChange={e => setNewPlayName(e.target.value)}
          />
          <button className={styles.Start__submit} type="submit">
            <img src={plusIcon} alt="Add Player" />
          </button>
        </form>
        <ul className={styles.Start__players}>
          {playersData.players.map(player => (
            <li key={player.id}>
              <Button
                text="X"
                onClick={() => console.log("Button")}
                cornerPlain="bottom-left"
                type="alert"
                size="s"
              />
              {player.name}
            </li>
          ))}
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

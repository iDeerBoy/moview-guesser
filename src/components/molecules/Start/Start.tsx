import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import styles from "./Start.module.scss";
import Button from "@/components/atoms/Button/Button";
import plusIcon from "@/assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useCallback, useMemo, useState } from "react";
import { addNewPlayer, removePlayer } from "@/store/PlayersDataSlice";
import { startGame } from "@/store/GameStateSlice";

const Start = () => {
  const dispatch = useDispatch();
  const { players } = useSelector((state: RootState) => state.playersData);
  const [newPlayerName, setNewPlayName] = useState<string>("");

  const disabledAdd = useMemo(() => {
    const notEmpty: boolean = newPlayerName.trim() === "";
    const isDuplicated = players.some(
      player => player.name.toLowerCase() === newPlayerName.trim().toLowerCase()
    );
    return notEmpty || isDuplicated;
  }, [newPlayerName, players]);

  const disabledStart = useMemo(() => {
    return players.length <= 1;
  }, [players]);

  const addPlayer = useCallback(() => {
    dispatch(addNewPlayer(newPlayerName));
    setNewPlayName("");
  }, [newPlayerName]);

  const remove = useCallback((playerId: string) => {
    dispatch(removePlayer(playerId));
  }, []);

  const startGameHandler = useCallback(() => {
    dispatch(startGame());
  }, []);

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
          <button
            className={styles.Start__submit}
            type="submit"
            disabled={disabledAdd}
          >
            <img src={plusIcon} alt="Add Player" />
          </button>
        </form>
        <ul className={styles.Start__players}>
          {players.map(player => (
            <li key={player.id}>
              <Button
                text="X"
                onClick={() => remove(player.id)}
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
          onClick={startGameHandler}
          cornerPlain="bottom-left"
          disabled={disabledStart}
        />
      </div>
    </GrayContainer>
  );
};

export default Start;

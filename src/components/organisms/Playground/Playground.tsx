import Start from "@/components/molecules/Start/Start";
import styles from "./Playground.module.scss";
import Guesser from "@/components/molecules/Guesser/Guesser";
import Timer from "@/components/molecules/Timer/Timer";
import Tutorial from "@/components/molecules/Tutorial/Tutorial";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const Playground: React.FC = () => {
  const { isStarted } = useSelector((state: RootState) => state.gameState);

  return (
    <section className={styles.Playground}>
      {isStarted ? <Guesser /> : <Tutorial />}
      {isStarted ? <Timer /> : <Start />}
    </section>
  );
};

export default Playground;

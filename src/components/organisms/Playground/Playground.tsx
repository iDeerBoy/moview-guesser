import Start from "@/components/molecules/Start/Start";
import styles from "./Playground.module.scss";
import Guesser from "@/components/molecules/Guesser/Guesser";
// import Tutorial from "@/components/molecules/Tutorial/Tutorial";

const Playground: React.FC = () => (
  <section className={styles.Playground}>
    {/* <Tutorial /> */}
    <Guesser />
    <Start />
  </section>
);

export default Playground;

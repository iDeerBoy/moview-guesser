import styles from "./Playground.module.scss";
import Tutorial from "@/components/molecules/Tutorial/Tutorial";

const Playground: React.FC = () => (
  <section className={styles.Playground}>
    <Tutorial />
  </section>
);

export default Playground;

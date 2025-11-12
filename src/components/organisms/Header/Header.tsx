import TitleApp from "@/components/atoms/TitleApp/TitleApp";
import styles from "./Header.module.scss";

const Header: React.FC = () => (
  <header className={styles.Header}>
    <TitleApp />
  </header>
);

export default Header;

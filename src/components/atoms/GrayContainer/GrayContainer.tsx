import styles from "./GrayContainer.module.scss";

interface GrayContainerProps {
  children: React.ReactNode;
  cornerPlain: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const GrayContainer: React.FC<GrayContainerProps> = ({ children }) => (
  <div className={styles.GrayContainer}>{children}</div>
);

export default GrayContainer;

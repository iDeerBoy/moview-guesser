import styles from "./GrayContainer.module.scss";

interface GrayContainerProps {
  children: React.ReactNode;
  cornerPlain: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const GrayContainer: React.FC<GrayContainerProps> = ({
  children,
  cornerPlain,
}) => {
  const cornerPlainPosition: { [key: string]: string } = {
    "top-left": styles.cornerPlainTopLeft,
    "top-right": styles.cornerPlainTopRight,
    "bottom-left": styles.cornerPlainBottomLeft,
    "bottom-right": styles.cornerPlainBottomRight,
  };

  return (
    <div
      className={`${styles.GrayContainer} ${cornerPlainPosition[cornerPlain]}`}
    >
      {children}
    </div>
  );
};

export default GrayContainer;

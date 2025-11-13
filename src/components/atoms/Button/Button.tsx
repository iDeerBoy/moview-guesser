import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "alert" | "ok";
  cornerPlain: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
const Button = ({ text, onClick, type = "ok", cornerPlain }: ButtonProps) => {
  return (
    <button
      className={`${styles.Button} ${styles[type]} ${styles[cornerPlain]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

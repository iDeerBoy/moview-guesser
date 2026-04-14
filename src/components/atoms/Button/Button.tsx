import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "alert" | "ok";
  cornerPlain: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "s" | "m";
  disabled?: boolean;
}
const Button = ({
  text,
  onClick,
  type = "ok",
  cornerPlain,
  size = "m",
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.Button} ${styles[type]} ${styles[cornerPlain]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

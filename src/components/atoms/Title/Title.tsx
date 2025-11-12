import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => (
  <h2 className={styles.Title}>{title}</h2>
);

export default Title;

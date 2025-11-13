import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import Title from "@/components/atoms/Title/Title";
import styles from "./Tutorial.module.scss";

const Tutorial: React.FC = () => (
  <GrayContainer cornerPlain="bottom-right">
    <div className={styles.Tutorial}>
      <Title title="How to Play?" />
      <p>
        Like u want to, drawing on a withe board or doing mimics, When you press
        start you will have 90 seconds to guess the movie, or you can pass if
        you don’t know the movie. who’s guess the movie score a point, if none
        one guess you lost a point. Wins who’s scored more points.
      </p>
    </div>
  </GrayContainer>
);

export default Tutorial;

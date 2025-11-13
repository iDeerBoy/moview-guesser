import Button from "@/components/atoms/Button/Button";
import GrayContainer from "@/components/atoms/GrayContainer/GrayContainer";
import Title from "@/components/atoms/Title/Title";
import posterMock from "@/assets/images/mockImage.jpg";
import styels from "./Guesser.module.scss";

const Guesser = () => {
  return (
    <GrayContainer cornerPlain="bottom-right">
      <div className={styels.Guesser}>
        <picture className={styels.Guesser__poster}>
          <img src={posterMock} alt="Moview Poster" />
        </picture>
        <div className={styels.Guesser__info}>
          <Title title="Title" />
          <span>Year</span>
          <p>Description</p>
          <div className={styels.Guesser__infoButtons}>
            <Button
              text="Pass"
              type="alert"
              cornerPlain="bottom-right"
              onClick={() => console.log("pass")}
            />
            <Button
              text="Play"
              cornerPlain="bottom-left"
              onClick={() => console.log("Play")}
            />
          </div>
        </div>
      </div>
    </GrayContainer>
  );
};

export default Guesser;

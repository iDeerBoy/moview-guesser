import styles from "./App.module.scss";
import Header from "./components/organisms/Header/Header";
import Playground from "./components/organisms/Playground/Playground";
import ScoreBoard from "./components/organisms/ScoreBoard/Scoreboard";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Playground />
      <ScoreBoard />
    </div>
  );
}

export default App;

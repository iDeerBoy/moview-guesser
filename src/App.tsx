import styles from "./App.module.scss";
import Header from "./components/organisms/Header/Header";
import Playground from "./components/organisms/Playground/Playground";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Playground />
    </div>
  );
}

export default App;

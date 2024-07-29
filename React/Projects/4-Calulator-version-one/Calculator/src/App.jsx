import css from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={css.calculator}>
      <Display />
      <ButtonsContainer/>
    </div>
  );
}

export default App;

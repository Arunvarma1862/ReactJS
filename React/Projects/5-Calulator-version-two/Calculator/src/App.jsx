import { useState } from "react";
import css from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [calVal, setCalValue] = useState("");
  const handleOnClick=(buttontext)=>{

    if(buttontext ==="c"){
          setCalValue("")
    }
    else if(buttontext === "="){
      const result= eval(calVal);
      setCalValue(result)
    }
    else{
      const newButton=  calVal + buttontext;
      setCalValue(newButton)
    }
  }
  return (
    <div className={css.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer  handleOnClick={handleOnClick}/>
    </div>
  );
}
export default App;

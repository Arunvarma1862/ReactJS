import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

    const dispatch= useDispatch();
    const numberInput= useRef()
   

    const handleIncrement =()=>{
      dispatch({type:"INCREMENT"})
    }
    const handledDecrement =()=>{
      dispatch({type:"DECREMENT"})
    }
    const handledPrivacyToggle =()=>{
      dispatch({type:"PRIVACY_TOGGLE"})
    }

    const handledAdd =()=>{
      const numberInputElement= numberInput.current.value;
      dispatch({type:"ADD",payload:{num1:numberInputElement}})
      numberInput.current.value=" "
    }
    const handledSub =()=>{
      const numberInputElement= numberInput.current.value;
      dispatch({type:"SUB",payload:{num2:numberInputElement}})
      numberInput.current.value=" "
    }
  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary"  onClick={handleIncrement}>
        +1
      </button>
      <button type="button" className="btn btn-secondary" onClick={handledDecrement}>
        -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handledPrivacyToggle}>Privacy Toggle</button>
      
    </div>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
     <input type="text" placeholder="Enter number" className="number-input" ref={numberInput}/>
     <button type="button" className="btn btn-info" onClick={handledAdd}>
       Add
     </button>
     <button type="button" className="btn btn-danger" onClick={handledSub} >
       Sub
     </button>
     
   </div>
   </>
  );
};
export default Controls;

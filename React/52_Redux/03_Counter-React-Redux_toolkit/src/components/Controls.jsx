import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";


const Controls = () => {

    const dispatch= useDispatch();
    const numberInput= useRef()
   

    const handleIncrement =()=>{
      dispatch(counterAction.increment())
     
    }
    const handledDecrement =()=>{
      dispatch(counterAction.decrement())
    }
    const handledPrivacyToggle =()=>{
      dispatch(privacyAction.toggle())
    }

    const handledAdd =()=>{
      const numberInputElement= numberInput.current.value;
      dispatch(counterAction.Add({num1:numberInputElement}))
      numberInput.current.value=" "
    }
    const handledSub =()=>{
        dispatch(counterAction.Sub(numberInput.current.value));
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

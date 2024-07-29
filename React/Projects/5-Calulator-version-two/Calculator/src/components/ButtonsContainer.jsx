import css from "./ButtonsConatiner.module.css";
const ButtonsConatiner = ({handleOnClick}) => {
  let Buttons=['c','1','2','3','4','5','6','7','8','9','0','+','-',"="]
  return (
    <div className={css.bottonConatiner}>
      {Buttons.map((but, index) => {
        return (
          <button onClick={()=>handleOnClick(but)} key={index} className={css.button}> 
            {but}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonsConatiner;

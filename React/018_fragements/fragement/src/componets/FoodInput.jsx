import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <>
    <input
      className={styles.kginput}
      type="text"
      placeholder="Enter Food item here"
      onKeyDown={handleOnKeyDown}
      
    />
    
    </>
  );
};
export default FoodInput;

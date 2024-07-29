import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
   todoItems.length === 0 && (
      <p className={styles.welcome}>welcome to TodoApp.</p>
    )
  );

  //  return (
  //   <>
  //      {TodoItems.length===0  ? <p className={styles.welcome}>Welcome to TodoApp</p>:""}

  //   </>
  //  )

  //  return <p>welcome </p>
};
export default WelcomeMessage;

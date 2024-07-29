import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";
import css from "./Todoitems.module.css";

const TodoItems = () => {
  const { todoItems} = useContext(TodoItemsContext);

  return (
    <>
      <div className={css["items-container"]}>
        {todoItems.map((item, index) => (
          <Todoitem
            key={index}
            todoName={item.name}
            todoDate={item.date}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;

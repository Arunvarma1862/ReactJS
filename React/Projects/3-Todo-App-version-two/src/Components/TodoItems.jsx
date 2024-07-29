import Todoitem from "./Todoitem";
import css from "./Todoitems.module.css"

const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div className={css['items-container']}>
        {TodoItems.map((item,index) => ( 
          <Todoitem  key={index} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;

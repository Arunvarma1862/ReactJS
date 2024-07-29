import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function Todoitem({ todoName, todoDate }) {

  const {deleteItem}=useContext(TodoItemsContext);
  

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 ">
          <button type="button" className="btn btn-danger kg-button " onClick={()=>deleteItem(todoName)}>
          <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;

import { FaDeleteLeft } from "react-icons/fa6";

function Todoitem({ todoName, todoDate,handleDeleteItem }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 ">
          <button type="button" className="btn btn-danger kg-button " onClick={()=>handleDeleteItem(todoName)}>
          <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;

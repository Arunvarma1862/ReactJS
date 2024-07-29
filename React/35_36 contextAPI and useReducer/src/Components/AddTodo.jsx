import { AiTwotoneFolderAdd } from "react-icons/ai";
import { useState, useContext } from "react";

import css from "./AddTodo.module.css";

import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const[todoName,setTodoNames] =useState("");
  const [dueDate,setDueDate]= useState("");

const {addItems}=useContext(TodoItemsContext);


  const handleTodoName=(event)=>{
    setTodoNames(event.target.value)
   
  }

  const handleDueDate=(event)=>{
    setDueDate(event.target.value)
    
  }

  const handleAddButtonClicked = () => {
    addItems(todoName, dueDate);
    setTodoNames("");
    setDueDate("")
  };

  return (
    <div className="container ">
      <div className="row kg-row" >
        <div className="col-6">
          <input
            className={css["kginput"]}
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input className={css.kginput} type="date" value={dueDate} onChange={handleDueDate}/>
        </div>
        <div className="col-2">
          <button onClick={handleAddButtonClicked} className="btn btn-success kg-button">
            <AiTwotoneFolderAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;

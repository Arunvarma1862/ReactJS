import { AiTwotoneFolderAdd } from "react-icons/ai";
import { useState ,useRef} from "react"

import css from "./AddTodo.module.css"


function AddTodo({onNewItem}){

  // const[todoName,setTodoNames] =useState("");
  // const [dueDate,setDueDate]= useState("");

  const todoNameElement=useRef()
  const dueDateElement=useRef()
 
  // const handleTodoName=(event)=>{
  //   setTodoNames(event.target.value)
  //   console.log(123456)
  //   noOfUpdates.current +=1
  // }

  // const handleDueDate=(event)=>{
  //   setDueDate(event.target.value)
  //   console.log(123456)
  //   console.log(`no of updates ${noOfUpdates.current}`)
  // }

  const handleAddButtonClicked=(event)=>{
    event.preventDefault()
    const todoName=todoNameElement.current.value
    const dueDate= dueDateElement.current.value
    todoNameElement.current.value="";
    dueDateElement.current.value=""
    onNewItem(todoName,dueDate)


    // setTodoNames("");
    // setDueDate("")
   

  }

    return (
        <div className="container ">
        <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        
          <div className="col-6">
            <input className={css['kginput']} type="text"  placeholder="Enter Todo here" ref={todoNameElement}  />
          </div>
          <div className="col-4">
            <input  className={css.kginput} type="date"  ref={dueDateElement}  />
          </div>
          <div className="col-2">
          <button type="submit"  className="btn btn-success kg-button" ><AiTwotoneFolderAdd /></button>
          </div>
        </form>
        </div>
    )
}
export default AddTodo
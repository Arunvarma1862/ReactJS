import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {
 
  const [todoItems,setTodoItems]=useState([]);

  // const handleNewItems=(itemName,itemDueDate)=>{
  //    console.log(`New Item added is ${itemName}-${itemDueDate}`)
  //    const newTodoItems=[...todoItems,{ name: itemName,
  //     date: itemDueDate}]
  //     setTodoItems(newTodoItems);
  // }
  
  const handleNewItems=(itemName,itemDueDate)=>{
     setTodoItems((currentValue)=>
      [...currentValue,{ name: itemName,
        date: itemDueDate}]
      );
 }

  const handleDeleteItem=(todoItemName)=>{

    const newItems= todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newItems)
    console.log(`delete item ${todoItemName}`)
   
  }


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItems}/>
      {/* {todoItems.length === 0 && <WelcomeMessage />} */}
      <WelcomeMessage TodoItems={todoItems}/>
      <TodoItems  TodoItems={todoItems} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}
export default App;

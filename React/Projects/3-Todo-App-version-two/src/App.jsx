import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "buy milk",
      date: "5/5/2024",
    },
    {
      name: "Go to college",
      date: "5/5/2024",
    },
    {
      name: "Like this videos",
      date: "5/5/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems  TodoItems={todoItems} />
    </center>
  );
}
export default App;

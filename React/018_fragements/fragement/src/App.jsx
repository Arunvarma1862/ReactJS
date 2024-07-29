import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./componets/FoodItems";
import ErrorMessage from "./componets/ErrorMessage";
import Container from "./componets/Container";
import FoodInput from "./componets/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  // let emptyMessage=foodItems.length === 0 ? <h3>I am still hungry</h3>:null
  // if(foodItems.length ===0){
  //   return <h3>I am still hungry</h3>
  // }

  const [currentText, setUpdateState] = useState("text...");
  const [foodItems, setFoodItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      const newItem = event.target.value.trim();
      if (!newItem) {
        // Check if value is empty after trimming
        return; // Don't proceed if the value is empty
      }
      if (event.target.value == foodItems.find((jk) => jk == newItem)) {
        setUpdateState("item already exist");
        setTimeout(() => {
          setUpdateState("");
        }, 5000);
      } else {
        let newFoodItem = event.target.value;
        let newItems = [...foodItems, newFoodItem];
        setFoodItems(newItems);
      }
      event.target.value = "";
    }
    // console.log(event.target.value);
    // setUpdateState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy foods</h1>
        <FoodInput handleOnKeyDown={OnKeyDown} />
        <ErrorMessage Items={foodItems} />
        <p>{currentText}</p>
        <FoodItems Items={foodItems} />
      </Container>

      <Container>
        <p>This is the india world hello world like this video</p>
      </Container>
    </>
  );
}

export default App;

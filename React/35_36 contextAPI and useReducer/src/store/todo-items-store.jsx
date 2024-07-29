import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    // console.log(`New Item added is ${itemName}-${itemDueDate}`);
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addItems,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, { text: inputText, completed: false }];
    });
    setInputText("");
  }

  function handleClick(index) {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        completed: !updatedItems[index].completed
      };
      return updatedItems;
    });
  }

  function getCompletedItems() {
    return items.filter(item => item.completed);
  }

  function getIncompleteItems() {
    return items.filter(item => !item.completed);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <h6>Made by Yugank Bansal</h6>
      
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <h4>Incomplete Tasks</h4>
        <ul className="theonlyul">
          {getIncompleteItems().map((todoItem, index) => (
            <div className="makeflex" key={index}>
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => handleClick(index)}
              />
              <li>{todoItem.text}</li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h4>Completed Tasks</h4>
        <ul className="theonlyul">
          {getCompletedItems().map((todoItem, index) => (
            <div className="makeflex" key={index}>
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => handleClick(index)}
              />
              <li>{todoItem.text}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

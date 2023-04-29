import '../App.css';
import React, { useState } from "react";


function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    function handleChange(event) {
      const newItem = event.target.value;
      setInputText(newItem);
    }
  
    function addItem() {
      setItems((prevValue) => {
        return [...prevValue, inputText];
      });
      setInputText("");
    }
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map(todoItem =>(
              <li>{todoItem}</li>
            ))}
            
          </ul>
        </div>
      </div>
    );
  }

export default App;

import '../App.css';
import React, { useState } from "react";
import ToDoItem from './toDoItem.jsx';
import InputArea from './inputArea';
import Heading from './Heading';

function App() {
    const [items, setItems] = useState([]);
    function addItem(inputText) {
      setItems((prevValue) => {
        return [...prevValue, inputText];
      });
    }
    return (
      <div className="container">
        <Heading />
        <InputArea onClick={addItem}/>
        <div>
          <ul>
            {items.map(todoItem =>(
              <ToDoItem text={todoItem}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
export default App;

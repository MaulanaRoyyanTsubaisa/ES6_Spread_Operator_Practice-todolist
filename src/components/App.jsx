import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // State for input text
  const [items, setItems] = useState([]); // State for list of items

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItems() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li> // Display each item as <li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

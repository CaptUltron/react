import React, { useState } from "react";

function App() {

const [textValue, setTextValue] = useState("");
const [AddToTheList, setAddToTheList] = useState([]);

//When new text is written into the input, its state is saved.
const handleTextChange = (event) => {
  setTextValue(event.target.value)
} 

//When the add button is pressed, the current data in the input should be
//added to an array.
const handleClick = () => {
  setAddToTheList( prevValue => {
    return [...prevValue, textValue];
  });
  setTextValue("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="text" value={textValue} onChange={handleTextChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {AddToTheList.map(AddToTheListItems => (
          <li>{AddToTheListItems}</li>
        ))}
          </ul>
      </div>
    </div>
  );
}

export default App;

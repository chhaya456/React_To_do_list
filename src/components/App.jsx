import React, { useState } from "react";

function App() {
  const [item, setnewitem] = useState("");
  const [items, setitems] = useState([]);

  function handlechange(event) {
    const newitem = event.target.value;
    setnewitem(newitem);
  }

  function addItem() {
    setitems((presvalue) => {
      return [...presvalue, item];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

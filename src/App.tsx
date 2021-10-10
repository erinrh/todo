import './App.css';
import{ useState } from 'react';


function App() {
  
  const [listItems, setListItems] = useState<string[]>(["My first item"]);
  const [newItem, setNewItem] = useState<string>("");

 
  function handleAdd() {
    setListItems([...listItems, newItem]); 
    setNewItem("");
  } 
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
      
        <div>
        <p>List Items:</p>
        <ul>
          {listItems.map((item, i) => {
              return <li>{item}</li>
          })} 
        </ul>
        </div>

          <label>
            New Item:
          </label>
          <input type="text" name="name" value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
          <button onClick={handleAdd}> Add </button>
    </div>

  );
}

export default App;

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
    <div>
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      
        <div style={{marginLeft: "20px"}}>
          <p>List Items:</p>
          <ul>
            {listItems.map((item, i) => {
                return <li>{item}</li>
            })} 
          </ul>
        

            <label>
              New Item:
            </label>
            <input type="text" name="name" value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
            <button onClick={handleAdd}> Add </button>
          </div>
    </div>

  );
}

export default App;

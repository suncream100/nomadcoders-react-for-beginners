import { useState } from "react";

// To Do
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDos(current => [toDo, ...current]);
    }
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write your to do..." onChange={onChange} value={toDo} />
        <button>Add To Do</button>
        <ul>
          {toDos.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;

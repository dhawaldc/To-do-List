import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit=()=>{

  }
  const handleDelete=()=>{
    
  }
  const handleAdd=()=>{
    setTodos([...todos,{todo, isCompleted:false}])
    setTodos("")
  }
  return (
    <>
      <Navbar />
      <div className="container bg-slate-100 mx-auto my-9 rounded-md p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input className="w-1/2" type="text" />
          <button onClick={handleAdd} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-5">Add</button>
          
        </div>
        <h2 className="font-bold text-xl">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-1" >Add</button>
              <button onClick={handleDelete} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-1" >Delete</button>
            </div>
          </div>
        </div>
        

      </div>
    </>
  );
}

export default App;

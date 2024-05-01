import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';


import "./App.css";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit=()=>{

  }
  const handleDelete=()=>{
    
  }
  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(),todo, isCompleted:false}])
    setTodo("")
  }
  const handleChange=(e)=>{
    
  setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id ==id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }
  
  
  return (
    <>
      <Navbar />
      <div className="container bg-slate-100 mx-auto my-9 rounded-md p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} className="w-1/2" type="text" />
          <button onClick={handleAdd} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-5">Add</button>
          
        </div>
        <h2 className="font-bold text-xl">Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{
            return <div key={item.id} className="todo flex w-1/2 justify-between my-2">
              <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-1" >Add</button>
              <button onClick={handleDelete} className="bg-slate-400 hover:bg-slate-700 text-sm font-semibold text-white p-3 py-1 rounded-md mx-1" >Delete</button>
            </div>
          </div>
          })}
          
        </div>
        

      </div>
    </>
  );
}

export default App;

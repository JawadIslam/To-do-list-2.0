import { useState } from "react";

export default function App() {
  const [Task, setTask] = useState([]);

  const [newTask, setNewTask] = useState("  ");

  function handelInput   (event) {
    setNewTask(event.target.value);
  }

  function addTask()
  {
    
    if(newTask.trim()!==""){
    setTask(t=>[...t,newTask])
    setNewTask("")

  }}

  function deleteTask(index) {
const updatedTasks= Task.filter((_ , i)=> i !==index);
setTask(updatedTasks)

  }
  function moveTaskDown(index) {
    const updatedTasks = [...Task];
    [updatedTasks[index],updatedTasks[index+1]]=[
      updatedTasks[index+1],updatedTasks[index]
    ]
    setTask(updatedTasks);
  }
function moveTaskUp(index){
  const updatedTasks=[...Task];
  [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
  setTask(updatedTasks)
}

  return (
    <div className= 'to-do'>
      <div>
        <h1>To Do App</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your text"
          value={newTask}
            
          onChange={handelInput}
        />
     
        <button className="Addbutton" onClick={addTask}>AddNew Task</button>
      </div>

      <ol>
        {Task.map((Task, index) => (
          <li key={index}>
            <span className="text">{Task} </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              ❌
            </button>
            <button className="move-button" onClick={() =>  moveTaskUp(index)}>
              🔺
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              🔻
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

//    Log    to    console

console.log("Hello   console");

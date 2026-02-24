import { useState } from "react";
import AddTask from "./addtask"
import Taskscount from "./taskscount"
import Taskslist from "./taskslist"



function Taskmanager() {
    let [tasks,setTasks]=useState([]);

    const addNewTasks=(taskObj)=>{
    setTasks([...tasks,taskObj]);
}
  return (
    <div >
    <h1>Task Manager</h1>
    <div className="flex justify-around" >
        <AddTask addNewTasks={addNewTasks}/>
        <Taskslist tasks={tasks}/>
        <Taskscount tasks={tasks}/>
    </div>
    </div>
  )
}

export default Taskmanager
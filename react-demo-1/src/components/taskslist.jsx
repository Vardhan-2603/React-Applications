

function Taskslist({tasks}) {
  return (
    <div>
        <h3>List of tasks</h3>
        {tasks.length===0?(
            <p>Empty</p>
        ):
            (tasks.map((taskObj,index)=>
                <p key={index}>{taskObj.taskName}</p>
            ))
        }
    </div>
  )
}

export default Taskslist


// if tasks list is empty then "empty" else map the tasks
// condition?tasks:empty
import React from 'react'

const Tasks = ({id, task, action1, action2}) => {

  return (
    <div className="task-item">
        <p>N: {id}</p>
        <p>Task: {task}</p>

        <button onClick={() => action1(id)}>Finish Task</button>
        <button onClick={() => action2(id)}>Remove</button>
    </div>
  )
}



export default Tasks
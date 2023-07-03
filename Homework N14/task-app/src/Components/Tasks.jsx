import React from 'react'

const Tasks = ({id, task, action1, action2}) => {
  console.log('task:', id)
  return (
    <div className="task-item">
        <p>N: {id}</p>
        <p>Task: {task}</p>

        <button onClick= {action1} >Finish Task</button>
        <button onClick = {action2} >Remove</button>
    </div>
  )
}



export default React.memo(Tasks)
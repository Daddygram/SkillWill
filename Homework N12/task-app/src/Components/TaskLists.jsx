import { Component } from "react";
import Tasks from "./Tasks";

class TaskLists extends Component{

    state = {
        inputValue: '',
        tasks: [{id:1, name: 'Make Coffee'}, {id:2, name: 'Take a Dump'}],
        finished: [{id:1, name: 'Wake up'}]
    }

    onChange = (event) => {
        const value = event.target.value
        this.setState({
          inputValue: value
        })
        console.log(this.state.inputValue)
    }

    addTask = (event) => {
        event.preventDefault();

        const task = {
            id: this.state.tasks.length +1,
            name: this.state.inputValue
        }

        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue: ''
        })
    }

    removeTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState({
            tasks
        })
    }

    finishTask = (id) => {
        // Task name and id gets deleted for some reason
        const finishedTask = this.state.tasks.filter((task) => task.id === id)
        this.setState({
            finished: [...this.state.finished, finishedTask]
        })
    }

    render(){
        return(

            <div className='taskTable'>
      
              <div className='toDoList'>
                <h1>To Do List</h1>
                <form onSubmit={this.addTask} className="task-form">
                  <input type="text" onChange={this.onChange} value={this.state.inputValue}/>
                  <button>Add Task</button>
                </form>
                {this.state.tasks.map((task)=> (
                    <Tasks key={task.id} id={task.id} task={task.name} action1={this.finishTask} action2={this.removeTask} />
                ))}
              </div>
      
              <div className='completedTasks'>
                <h2>Completed Tasks:</h2>
                <div>
                    {this.state.finished.map((task)=> (
                        <Tasks key={task.id} id={task.id} task={task.name} action1={this.finishTask} action2={this.removeTask} />
                    ))}
                </div>
              </div>
              
            </div>

        )
    }
}

export default TaskLists;
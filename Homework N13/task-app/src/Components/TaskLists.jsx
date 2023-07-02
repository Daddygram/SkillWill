import { PureComponent } from "react";
import Tasks from "./Tasks";

class TaskLists extends PureComponent{

    state = {
        inputValue: '',
        tasks: [{id:1, name: 'Make Coffee'}, {id:2, name: 'Take a Dump'}],
        finished: []
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

    removeTask = (id, check) => {
      if(check){
        const finishedTask = this.state.finished.filter((task) => task.id !== id);
        this.setState({
          finished: finishedTask
        })
      }else{
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({
          tasks: tasks
        });
      }
        
    }
      

    finishTask = (id) => {
        const finishedTask = this.state.tasks.find((task) => task.id === id);
        this.setState({
          finished: [...this.state.finished, finishedTask]
        });
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
                    <Tasks key={task.id} id={task.id} task={task.name} action1={() => this.finishTask(task.id)} action2={() => this.removeTask(task.id, false)} />
                ))}
              </div>
      
              <div className='completedTasks'>
                <h2>Completed Tasks:</h2>
                <div>
                    {this.state.finished.map((task)=> (
                        <Tasks key={task.id} id={task.id} task={task.name} action1={() => this.finishTask(task.id)} action2={() => this.removeTask(task.id, true)} />
                    ))}
                </div>
              </div>
              
            </div>

        )
    }
}

export default TaskLists;
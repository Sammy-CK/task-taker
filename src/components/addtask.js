import React from "react";
import './style/tasks.css'
import { NavLink, useNavigate } from "react-router-dom";

function AddTask({setTask, task, setAllTasks  }){
  let taskTasks = useNavigate()
    return(
        <div>

<div className="formDivTasks">
      <div className="loginDivTasks">
      <form
      className="logInFormTasks"
        onSubmit={(e) => {
          e.preventDefault();

          fetch("https://task-201f.onrender.com/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: task.title, description: task.description, priority: +(task.priority), status: +(task.status)}),
          })
            .then((resp) =>{
            if(resp.ok){
              resp.json()

              .then((data) => {
                console.log(data);
                setTask({title: '', description: '', priority: '0', status: '0'})
            
                fetch("https://task-201f.onrender.com/todos")
              .then((resp) => resp.json())
              .then((data) => {
                setAllTasks(data.data)
                taskTasks('/tasks')
              });
          });


            }else{
              resp.json()
              .then((data) => {
                alert(data.data)
                console.log(data)
              })
            }
            
          })

        }}
      >
              <h1 style={{textAlign: "center"}}>ADD TASK</h1>
        <label htmlFor="taskName">TASK NAME:</label>
        <input
        style={{marginLeft: "50px", width: "40%"}}
          type="text"
          id="taskName"
          required
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title}
        />
        <br />

        <label htmlFor="taskDescription">DESCRIPTION:</label>
        <input
        style={{marginLeft: "29px", width: "40%"}}
          type="text"
          id="taskDescription"
          required
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          value={task.description}
        />
        <br />

        <label htmlFor="taskStatus">STATUS:</label>
        <select
        style={{marginLeft: "110px"}}
          id="taskStatus"
          required
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          value={task.status}
        >
          <option value= "0" >CREATED</option>
          <option value="1">STARTED</option>
          <option value="2">COMPLETED</option>
          <option value="3">CANCELLED</option>
        </select>
        <br />

        <label htmlFor="taskPriority">PRIORITY:</label>
        <select
        style={{marginLeft: "110px"}}
          id="taskPriority"
          required
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          value={task.priority}
        >
          <option value="0">LOW</option>
          <option value="1">MEDIUM</option>
          <option value="2">HIGH</option>
        </select>

        <br />
        <button className="cancelUpdateTask">  <NavLink to={`/tasks`} className="cancelNav">BACK</NavLink></button>
        <input type="submit" className="createBtn" value="CREATE" />

      </form>
      </div>
      </div>
  

        </div>
    )

}


export default AddTask;
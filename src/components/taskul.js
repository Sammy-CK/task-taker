import React from "react";
import { NavLink } from "react-router-dom";
import './style/tasks.css'

function TaskUl({ taskd, setUpdatedTask, allTasks, setAllTasks }) {
    
 

  return (
    <li className="taskCardLi">
      <h2 className="restInLi">{taskd.title}</h2>
      <p style={{float: "left", paddingLeft: "150px"}}><b>STATUS: </b>{taskd.status}</p>
      <p><b>PRIORITY: </b>{taskd.priority}</p>
      <p><b>DESCRIPTION: </b>{taskd.description}</p>


      <button className="liBtn2" onClick={() =>   setUpdatedTask({id:taskd.id, title:taskd.title, description:taskd.description, status:`${  (taskd.status=== "CREATED")? "0": (taskd.status=== "STARTED")? "1": (taskd.status === "COMPLETED")? "2": "3"
 }`, priority: `${ (taskd.priority === "MEDIUM")? "1":(taskd.priority === "LOW")? "0": "2" }` 
          })}>
        {" "}
        <NavLink to={`/tasks/update/${taskd.id}` } style={{textDecoration: "none", color: "black"}}>Edit</NavLink>
      </button>
      <button
      className="liBtn3"
        onClick={() => {
          fetch(`/todos/${taskd.id}`, {
            method: "DELETE",
            headers: {"content-type": "application/json",}
        })
            .then(() => {
            //   console.log(data);
              let remainingTasks = allTasks.filter(
                (oneTask) => oneTask.id !== taskd.id
              );
              setAllTasks(remainingTasks);
            });
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskUl;
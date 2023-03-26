import React from "react";
import { NavLink } from "react-router-dom";
import './style/tasks.css'

function TaskUl({ taskd, setcurrTask, allTasks, setAllTasks }) {

  return (
    <li className="taskCardLi">
      <h2 className="restInLi">{taskd.title}</h2>
      <p style={{float: "left", paddingLeft: "150px"}}><b>STATUS: </b>{taskd.status}</p>
      <p><b>PRIORITY: </b>{taskd.priority}</p>
      <button className="liBtn1" onClick={() => setcurrTask(taskd)}>
        {" "}
        <NavLink to={`/tasks/${taskd.id}`} style={{textDecoration: "none", color: "black"}}>More info</NavLink>
      </button>
      <button className="liBtn2" onClick={() => setcurrTask(taskd)}>
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
            .then((resp) => resp.json())
            .then((data) => {
            //   console.log(data);
              let remainingTasks = allTasks.filter(
                (oneTask) => oneTask.id !== data.id
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
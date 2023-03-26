import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './style/update.css'
import './style/tasks.css'


function UpdateTask({
  currTask,
  setAllTasks,
  updatedTask,
  setUpdatedTask,
}) {
  let takeToTask = useNavigate();

  return (
    <div className="formDivUpdate">
            <h1
        style={{
          textAlign: "left",
          padding: "0px 10px 10px 10px",
          fontSize: "4vw",
          fontFamily: "fantasy",
          width: "40%",
        }}
      >
        TASK MANAGER
      </h1>

      <div className="loginDivUpdate">
      <form
        className="logInFormUpdate"
        onSubmit={(e) => {
          e.preventDefault();

            fetch(`/todos/${updatedTask.id}`, {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify( {title: updatedTask.title, description: updatedTask.description, priority: +(updatedTask.priority), status: +(updatedTask.status)} ),
            })
              .then((resp) => resp.json())
              .then((data) => {
                setUpdatedTask({
                    title: "",
                    description: "",
                    priority: "0",
                    status: "0"
                  });


          fetch("/todos")
            .then((resp) => resp.json())
            .then((data) => {
              setAllTasks(data.data);
              takeToTask("/tasks");
            });
        });
    
        }}
      >
        <label htmlFor="taskName" style={{paddingRight: "20px"}}>TASK NAME:</label>
        <input type="text"  id="taskName" required
            onChange={(e) => setUpdatedTask({ ...updatedTask,title: e.target.value })}
            value={updatedTask.title} />


        <br />
        <label htmlFor="taskDescription">DESCRIPTION:</label>
        <input
          type="text"
          required
          id="taskDescription"
          onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          value={updatedTask.description}        />
        <br />


        <label htmlFor="taskStatus">STATUS:</label>
                <select
        style={{marginLeft: "110px"}}
          id="taskStatus"
          required
          onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.value })}
          value={updatedTask.status}
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
          onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
          value={updatedTask.priority}
        >
          <option value="0">LOW</option>
          <option value="1">MEDIUM</option>
          <option value="2">HIGH</option>
        </select>
        <br />



        <button
        className="cancelUpdateTask"
          onClick={() => {
            setUpdatedTask({
                title: "",
                description: "",
                priority: "0",
                status: "0"
              });
          }}
        >
          {" "}
          <NavLink className="cancelNav" to={`/tasks`} >CANCEL</NavLink>{" "}
        </button>
        <input type="submit" value="UPDATE" />
      </form>
      </div>
    </div>
  );
}

export default UpdateTask;
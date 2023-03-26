import { React } from "react";
import TaskUl from "./taskul";
import { NavLink, useNavigate } from "react-router-dom";
import './style/tasks.css'
function Tasks({
  allTasks,
  setAllTasks,
  currTask,
  setcurrTask,
}) {
  // console.log(todayTasks)
  let takeLogIn = useNavigate();
  let tasksShown = allTasks.map((taskd) => {
    return (
      <TaskUl
        key={taskd.id}
        taskd={taskd}
        setcurrTask={setcurrTask}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
      />
    );
  });

  return (
    <div className="taskDiv" id="takss" >
            <button
      className="homepageLinks"
        onClick={() => {
            fetch('/users/logout', {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
            })
            .then(takeLogIn("/login"))
        }}
      >
        LOG OUT
      </button>
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
     <div  style={{ textAlign: "right", paddingRight: "30px", clear: "both" }}>
        <p>
          <b style={{ fontSize: "2vw" }}>
          Staying organized is our game
          </b>
        </p>
      </div>

      <NavLink to="/tasks/create">ADD TASK</NavLink>

      <ul className="taskCardUl">{tasksShown}</ul>
    </div>
  );
}

export default Tasks;
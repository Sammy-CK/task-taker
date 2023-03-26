import { React } from "react";
import TaskUl from "./taskul";
import { useNavigate } from "react-router-dom";
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
        currTask={currTask}
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
          takeLogIn("/login");
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

      <ul className="taskCardUl">{tasksShown}</ul>
    </div>
  );
}

export default Tasks;
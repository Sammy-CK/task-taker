import React from 'react';
import { NavLink } from "react-router-dom";
import './style/homepage.css';


function Homepage(){

return(
    <div id="homepageDiv">

      <NavLink className="homepageLinks" to="/login">
        LOG IN
      </NavLink>
      <NavLink className="homepageLinks" to="/signup">
        SIGN UP
      </NavLink>
      <h1
        style={{
          textAlign: "left",
          padding: "0px 10px 10px 10px",
          fontSize: "4vw",
          fontFamily: "fantasy",
          width: "40%",
          color: "black"
        }}
      >
        TASK MANAGER
      </h1>
      <div className="insideHomePage">
      <div  style={{ textAlign: "right", paddingRight: "30px" }}>
        <p>
          <b style={{ fontSize: "2vw" }}>
            Plan and coordinate your activities to ensure completion
          </b>
        </p>
      </div>
      <div className="missionDiv">
        <p className="missionLi">
          <b className="missionLi">Make your work more efficient: </b>
          Task manager improves productivity by utilizing the right resources.
        </p>
        <p className="missionLi">
          <b className="missionLi">Bring focus to your tasks: </b>
          Whether you work as an individual or an organization,we help you
          achieve goals.
        </p>
        <p className="missionLi">
          <b className="missionLi">Organize your organization: </b>
          Helps streamline your workflow becoming more efficient, reaching your target.
        </p>
      </div>
      <div className="testUl">
        <h3>Reviews</h3>
        <p className="testLi">
          Once I used Task Manager their was no way I was going back.
          <br />
          <b>Philip, Developer Google</b>{" "}
        </p>

        <p className="testLi">
          My tasks have never been more clear thank you for this amazing webapp
          <br />
          <b>Allan, Data Analyst Safaricom</b>{" "}
        </p>

        <p className="testLi">
          Improved my productivity by a large margin 10/10
          <br />
          <b>Mwosa, DevOps Jumia</b>{" "}
        </p>
      </div>
      <small>
        <b className="patent"> &#169; 2022 TASK MANAGER</b>
      </small>{" "}
      </div>
    </div>
)

}


export default Homepage;
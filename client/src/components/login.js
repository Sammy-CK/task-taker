import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './style/login.css'

function LogIn({ loginDetails, setLoginDetails }) {

    let takeToTask = useNavigate();
    return (
      <div className="formDiv">
  
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
  
        <div className="loginDiv">
        <form
          className="logInForm"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(loginDetails)

            fetch('/users/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginDetails)
            })
                .then(resp => {
                    if(resp.ok){
                        resp.json().then((user) => console.log(user))
                    }else{
                        resp.json().then((error) => alert(error.message))
                    }
            })
            
            

          }}
        >
          <h1>Log In</h1>
          <label htmlFor="userName" style={{fontSize: "13px"}}>USERNAME</label>
          <br />
          <input
            type="text"
            id="userName"
            required
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
            value={loginDetails.name}
          />{" "}
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            type="password"
            id="password"
            required
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={loginDetails.password}
          />
          <br />
          <input type="submit" id="submitBtn" value="LOGIN" />
          <p>
            Dont have an account? <NavLink to="/signup">SIGNUP</NavLink>
          </p>
        </form>
        </div>
      </div>
    );
}

export default LogIn;

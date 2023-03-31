import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './style/signup.css'

function SignUp({ signupDetails, setSignupDetails }) {
  let travelHome = useNavigate();
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
          // console.log(signupDetails)
          if (
            document.getElementById("Initial").value ===
            document.getElementById("secondInitial").value
          ) {
            fetch("https://task-201f.onrender.com/users", {
              method: "POST",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify(signupDetails),
            })
            .then(resp => {
                if(resp.ok){
                    resp.json().then((user) => {
                      console.log(user)
                      travelHome('/login')
                    })
                }else{
                    resp.json().then((error) => alert(`${error.data.username || error.message}`))
                    setSignupDetails({ username: "", email: "", password: "" });
                    e.target.reset();
                }
        })
            setSignupDetails({ username: "", email: "", password: "" });
            e.target.reset();
          } else {
            alert("Please enter matching passwords");
            e.target.reset();
            setSignupDetails({ username: "", email: "", password: "" });
          }
        }}
      >
        <h1>Sign Up</h1>
        <label htmlFor="userName">USERNAME</label>
        <br />
        <input
          type="text"
          id="userName"
          required
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, username: e.target.value })
          }
          value={signupDetails.username}
        />{" "}
        <br />
        <label htmlFor="email">EMAIL</label>
        <br />
        <input
          type="email"
          id="email"
          required
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, email: e.target.value })
          }
          value={signupDetails.email}
        />{" "}
        <br />
        <label htmlFor="Initial">PASSWORD</label>
        <br />
        <input
          type="password"
          id="Initial"
          required
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, password: e.target.value })
          }
          value={signupDetails.password}
        />
        <br />
        <label htmlFor="secondInitial">CONFIRM PASSWORD</label>
        <br />
        <input type="password" id="secondInitial" />
        <br />
        <input type="submit" value="SIGNUP" />
        <p>
          Have an account? <NavLink to="/login">LOGIN</NavLink>
        </p>
      </form>
      </div>
    </div>
  );
}

export default SignUp;
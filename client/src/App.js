import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage'
import LogIn from "./components/login";
import SignUp from "./components/signup";
import Tasks from "./components/tasks";



function App() {

  let [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  let [signupDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
let [allTasks, setAllTasks] = useState([]);
let [currTask, setcurrTask] = useState();

useEffect(() => {
fetch('/todos')
.then(resp => resp.json())
.then(data => setAllTasks(data))
}, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />}/>
      
      <Route
            path="/login"
            element={
              <LogIn
                loginDetails={loginDetails}
                setLoginDetails={setLoginDetails}
              />
            }
          />
          
          
          <Route
            path="/signup"
            element={
              <SignUp
                signupDetails={signupDetails}
                setSignupDetails={setSignupDetails}
              />
            }
          />

          <Route
            path="/tasks"
            element={
              <Tasks
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                currTask={currTask}
                setcurrTask={setcurrTask}
              />
            }
          />


      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

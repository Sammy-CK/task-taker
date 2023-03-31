import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage'
import LogIn from "./components/login";
import SignUp from "./components/signup";
import Tasks from "./components/tasks";
import AddTask from './components/addtask';
import UpdateTask from './components/updatetask';



function App() {
  let [user, setUser] = useState(false);
  let [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  let [signupDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
let [allTasks, setAllTasks] = useState([]);

let [task, setTask] = useState({
  title: "",
  description: "",
  priority: "0",
  status: "0"
});

let [updatedTask, setUpdatedTask] = useState({
  title: "",
  description: "",
  priority: "0",
  status: "0"
});

useEffect(() => {
  fetch('https://task-201f.onrender.com/user/login/check')
  .then((resp) => {
    if (resp.ok){
      setUser(true)
    }else{
      setUser(false)
    }
  })

}, [])

useEffect(() => {
  if (user){
fetch('https://task-201f.onrender.com/todos')
.then(resp => resp.json())
.then(data => setAllTasks(data.data))
}else{

}
}, [user])

    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/login"
            element={
              <LogIn
                setUser={setUser}
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
              setUser={setUser}
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                updatedTask={updatedTask}
                setUpdatedTask={setUpdatedTask}
              />
            }
          />

          <Route
            path="/tasks/create"
            element={<AddTask setTask={setTask} task={task} setAllTasks={setAllTasks}/>}
          />

          <Route
            path="/tasks/update/:id"
            element={
              <UpdateTask
                setAllTasks={setAllTasks}
                updatedTask={updatedTask}
                setUpdatedTask={setUpdatedTask}
              />
            }
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {React, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage'
import LogIn from "./components/login";
import SignUp from "./components/signup";



function App() {

  let [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  let [user, setUser] = useState(null);
  let [signupDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

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
                user={user}
                setUser={setUser}
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


      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

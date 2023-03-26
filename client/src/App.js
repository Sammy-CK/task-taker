import './App.css';
import {React, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage'
import LogIn from "./components/login";



function App() {

  let [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  let [user, setUser] = useState(null);

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

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState()

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)

    },3000);
  }

  var toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabeled","Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabeled","Success")
    }


  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} mode={mode}/>
      <div className="container">
      <Routes>
        <Route element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below:"  mode={mode}/>} path="/"/>
        <Route element={<About mode={mode}/>} path="/about"/>
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;

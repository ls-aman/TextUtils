import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#1F1F1F"
      showAlert("Dark Mode has been enabed", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar Title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/> 
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <Routes>
        <Route 
              path="/" 
              element={<Form showAlert={showAlert} mode={mode} heading="Enter Text" toggleMode={toggleMode}/>}
            />
        <Route 
              path="/About" 
              element={<About />} 
            />
      </Routes>
    </div> 
    </BrowserRouter>
    </>
  );
}

export default App;

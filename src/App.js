import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");          //For Button Mode
  const [typeForm, settypeForm] = useState("Dark")      //For Button Text
  const modeToggle = () => {
    if (mode === "light" && typeForm === "Dark") {
      setMode("dark")
      settypeForm("Light")
      document.body.style.backgroundColor = "#2C3333"
      document.body.style.color = "white"
      document.title = "Text-Utils : Dark Mode"
    }
    else {
      setMode("light")
      settypeForm("Dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.title = "Text-Utils : Light Mode"
    }
  }

  return (
    <>

      <Router>
        <Navbar text="TextUtils" mode={mode} modeToggle={modeToggle} typeForm={typeForm} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm textHead="Enter Text" />
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;

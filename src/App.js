import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React,{useState} from 'react';

function App() {
  const[mode,setMode] = useState("light");          //For Button Mode
  const[typeForm,settypeForm]=useState("Dark")      //For Button Text
  const modeToggle =()=>{
    if (mode === "light" && typeForm ==="Dark"){
      setMode("dark")
      settypeForm("Light")
      document.body.style.backgroundColor = "#2C3333"
      document.body.style.color = "white"
    }
    else{
      setMode("light")
      settypeForm("Dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>
    <Navbar text="TextUtils" mode={mode} modeToggle={modeToggle} typeForm={typeForm}/>
    <TextForm textHead ="Enter Text"/>
    {/* <About/> */}
    </>
  );
}

export default App;

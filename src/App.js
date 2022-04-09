import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar text="TextUtils"/>
    <TextForm textHead ="Enter Text"/>
    <About/>
    </>
  );
}

export default App;

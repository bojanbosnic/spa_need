import { Route, Routes } from "react-router-dom";
import About from './componets/About';
import Contact from './componets/Contact';
import "./App.css";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <div className="App">
      <h1>helo</h1>
      <div className="okvir">
      <Navbar/>
      <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
  
    </div>
   
  );
}

export default App;

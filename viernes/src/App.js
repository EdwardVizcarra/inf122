
import './App.css';
import Login from '../src/components/Login';
import Registro from '../src/components/Registro';
import NavBar from '../src/components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Router>
   <NavBar/>
    <div>  
      <Routes>

      <Router path="/" element ={<NavBar/>}/>
        <Router path="/login" element ={<Login/>}/>
        <Router path="/registro" element ={<Registro/>}/>
   
      </Routes>
   
      </div>
   </Router>
    </div>
    
  );
}

export default App;

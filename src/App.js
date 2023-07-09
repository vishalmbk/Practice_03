
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import ReducerTut from './Components/Reducer';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        
         <Link to="/"> Home </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <hr/>
      <ReducerTut/>
    </div>
  );
}

export default App;

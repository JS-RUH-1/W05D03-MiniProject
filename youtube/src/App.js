
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Search from './Search';
import {  Switch, Link, useHistory } from "react-router-dom";
import {  BrowserRouter as  Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
  
  
    <Navbar/> 
    <Switch>
                    <Link exact path="/" component={Home}/>
                    <Link  path="/Search" component={Search}/>
                </Switch>
    </div>
    </Router>

  );
}

export default App;

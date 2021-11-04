import './App.css';
import Header from './Header';
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Watch from './Watch'
import Search from './Search';
import Home from './Home';


function App() {
  return (
<div >
  <Router>
    <div>
    <Header/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/Watch"><Watch/></Route>
      <Route path="/Search"><Search/></Route>
    </Switch>
    </div>
  </Router>
      </div>
      
    );
}

export default App;

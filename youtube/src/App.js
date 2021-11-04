
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Search from './Search';
import WatchLeater from './WatchLaeter';
import { BrowserRouter as  Router, Switch, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/> 
      <Switch>
          <Link exact path="/" component={Home}/>
          <Link  path="/Search" component={Search}/>
          <Link  path="/WatchLeater" component={WatchLeater}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;

import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyVideo from "./component/MyVideo";
import Search from "./component/search";
import Navbar from "./component/navBar";
import WatchLater from "./component/watchLater";


function App() {
  return (
    <Router>
     <Navbar/>
      <Search />
      <Switch>
      <Route path="/video/:id" component={MyVideo} />
      <Route path="/watchLater" component={WatchLater} />
        <Route path="/" component={Home} />
      
      </Switch>
    </Router>
  );
}

export default App;

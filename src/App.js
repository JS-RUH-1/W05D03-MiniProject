import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyVideo from "./component/MyVideo";
import watchLater from "./component/watchLater";
import Search from "./component/search";
import Navbar from "./component/navBar";


function App() {
  return (
    <Router>
     <Navbar/>
      <Search />
      <Switch>
      <Route path="/video/:id" component={MyVideo} />
        <Route path="/" component={Home} />
        <Route path="/watchLater" component={watchLater} />
      </Switch>
    </Router>
  );
}

export default App;

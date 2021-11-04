import "./App.css";
import { Details } from "./components/Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WatchList } from "./components/WatchList";
import { Navbar } from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Home } from "./components/Home";
import { Search } from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <div>
          {/*  <Search /> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/watch">
              <WatchList />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

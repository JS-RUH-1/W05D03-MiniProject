import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecommVideo from "./Components/RecommVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import WatchLater from "./Components/WatchLater";

function App() {
  return (
    <div cclassName="app__page">
      <Router>
        <Header />
        <Sidebar />

        <Switch>
          <Route path="/search/:searchTerm">
            <SearchPage />
          </Route>
          <Route path="/watchlater">
            <WatchLater />
          </Route>
          <Route exact path="/">
            <RecommVideo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

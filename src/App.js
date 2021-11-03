import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import WatchedLater from "./pages/WatchedLater";
import VerticalBar from "./components/VerticalBar";
import Search from "./pages/Search";
import { useSelector } from "react-redux";
function App() {
  const allData = useSelector((allData) => {
    return {
      myStyle: allData.ui.colorsObject,
    };
  });
  return (
    <Router>
      <NavBar />
      <div className="flex-container">
        <VerticalBar />
        <Switch>
          <div
            className="flex-right"
            style={{
              backgroundColor: allData.myStyle.app_background,
            }}
          >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/watchedLater" component={WatchedLater} />
            <Route exact path="/search" component={Search} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

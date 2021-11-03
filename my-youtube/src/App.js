import "./Style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Axios from "axios"
// import { Navbar, Container, Nav } from "react-bootstrap";
import Header from "./Compnents/Header";
import Sidebar from "./Compnents/Sidebar";
import SearchPage from "./Compnents/SearchPage";
import RecommendeVideos from "./Compnents/RecommendeVideos";
// **
// my youtube key : AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
// request to get popular vid
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
// requsest for serach *** q={keyword}
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=hello&key=AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="App__grid">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="App__grid">
              <Sidebar />
              <RecommendeVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

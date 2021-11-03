import "./Style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Compnents/Header";
import Sidebar from "./Compnents/Sidebar";
import SearchPage from "./Compnents/SearchPage";
import RecommendeVideos from "./Compnents/RecommendeVideos";
import WatchLaterpage from "./Compnents/WatchLaterpage";
import DetailsPage from "./Compnents/DetailsPage";

import { useSelector, useDispatch } from "react-redux";
import { addVideos } from "./Reducers/Videos/videos";
import { addSearchVideos } from "./Reducers/SearchVideos/searchVideos";
import { addDetails } from "./Reducers/Details/details";

import { useEffect } from "react";

// **
// my youtube key : AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
// request to get popular vid
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
// requsest for serach *** q={keyword}
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=hello&key=AIzaSyBeVD4KH0sbbSzwiTUZl4icxDBmgOWPdtk
function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      videos: state.videos.videos,
    };
  });
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAZC9t72MsarQiSZ1sn-UmPjUnuDn72H68"
      )
      .then((res) => {
        console.log(res.data.items);
        dispatch(addVideos(res.data.items));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detilas/:videoId">
            <div className="App__grid">
              <Sidebar />
              <DetailsPage />
              <RecommendeVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="App__grid">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/watchlater">
            <div className="App__grid">
              <Sidebar />
              <WatchLaterpage />
            </div>
          </Route>
          <Route exact path="/">
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

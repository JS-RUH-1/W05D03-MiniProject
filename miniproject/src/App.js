import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recomvid from './Recomvid';
import Searchpag from './Searchpag';
import {Route, BrowserRouter as Router, Switch ,Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {addVids} from './reducers/vid/vid';
import data from './data'
import Watchlater from './Watchlater';
import Details from "./Details";
import {addDetailes} from "./reducers/detailes/detailes";

function App() {
 
  const dispatch = useDispatch();

    useEffect(()=>{
      axios
        .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyD1Fs6YR_JwtRtrI212uins6XjGEqCLwQ4")
        .then((res)=>{
          dispatch(addVids(res.data.items));
          console.log(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        })
    },[])

    useEffect(()=> {},[])



  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/detilas/:videoId">
        <div className="App__grid datail123 ">
          <Sidebar />
          <Details />
        </div>
      </Route>
          <Route exact path="/">
            {/* {" "} */}
            <div className="app-page">
              <Sidebar /> 
             <Recomvid />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
          {/* {" "} */}
            <div className="app-page">
              <Sidebar /> 
              <Searchpag />
            </div>
          </Route>
          <Route  path="/watchlater"  >
          <div className="app-page">
            {/* {" "} */}
              <Sidebar /> 
              <Watchlater />
            </div>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

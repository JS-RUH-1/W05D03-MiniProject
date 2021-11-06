
import './App.css';
import React,{ useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Desc from './components/Desc';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import Search from './components/Search';
import Data from './components/Data';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo , clearVideo } from './reducers/video/video';
import axios from "axios";


function App() {

    const [theData,setData]=useState([]);

    useEffect(() => {
        
      axios
        .get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&key=AIzaSyBlbXfHThjv2icSUxzRD6QbpHpjU8CSXm0')
        .then((res) => {
          setData(res.data.items);
          console.log(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
        console.log("populars:",theData)
    }, []);
  
    

  return (
    <Router>
      <div className="App">
      <Navbar />
        <header className="App-header">
        <Route exact path="/">
          <Home name={theData} />
        </Route>
        <Route path="/Home">
          <Home name={theData} />
        </Route>
        <Route path="/Desc">
          <Desc />
        </Route>
        <Route path="/WatchList">
          <WatchList />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        </header>
      </div>
    </Router>
    );
}

export default App;
/* 
<Route exact path="/" element={<Home name={theData} />}/>
        <Route path="/Home" element={<Home name={theData} />}/>
        <Route path="/Desc" element={<Desc />}/>
        <Route path="/WatchList" element={<WatchList />}/>
        <Route path="/Search" element={<Search />}/>
         */
/*
<div id="videos">
        <div className="videos_parent">
        <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
        <h4 className="video_title" > The title is something</h4>
        <h6 className="video_channel_title" >Youtube channel</h6>
        </div>
        <div className="videos_parent">
        <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
        <h4 className="video_title" > The title is something</h4>
        <h6 className="video_channel_title" >Youtube channel</h6>
        </div>
        <div className="videos_parent">
        <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
        <h4 className="video_title" > The title is something</h4>
        <h6 className="video_channel_title" >Youtube channel</h6>
        </div>
        </div>*/
import './App.css';
import axios from 'axios'
import React from 'react'
import data from './data';
import Nav from './nav';
import Content from './content';
import SideBar from './sideBar';
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from './reducers/popular/popular'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  const query = 'react.js'
  const APIKEY = 'AIzaSyBHrvObxnzBUWoXsVNKH0DrEC1msazCcEg'

  const dispatch = useDispatch();
  const [video, setVideo] = React.useState('')

  React.useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&chart=mostPopular&key=${APIKEY}`)
      .then((res) => {
        dispatch(addPopular(res.data.items));
        setVideo(res.data.items[0].id.videoId)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // React.useEffect(() => {
  //   dispatch(addPopular(data.items))
  // }, []);

  // React.useEffect(() => {
  //   axios
  //     .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${APIKEY}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Router>
    <div className="App">
      <Nav setVideo={setVideo}/>
      <div className='container'>  
        <SideBar setVideo={setVideo}/>
        <Routes> 
           <Route path="/:id" element={<Content video={video}  />}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

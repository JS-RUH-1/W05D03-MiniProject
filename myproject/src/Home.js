import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addVideos, addVideo, removeVideo } from "./reducers/youtube/youtube"
import axios from "axios";
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Details from './Details';

function Home() {
  const [video ,setVideo] = useState([]);

  const dispatch = useDispatch(); 

  // const addVideo = () => {
  //   const video = {
    
  //   };

  //   dispatch(addVideo(video));
  // };

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&chart=mostPopular&key=AIzaSyAq7aCKZ9Mmh-hkA4Svq2KlZ-F1Ru1XEDI")
      
      

      .then((res) => {
        console.log(res.data)
        setVideo(res.data.items)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

// // _________
  return (
<div >

  <div  className="vid" >
         
         {video.map((items)=>{
          return(
            <div className="vidm">
              <iframe width="420" height="345" src={`https://www.youtube.com/embed/${items.id.videoId}`}></iframe>
               <h2>
                {items.snippet.title}
              </h2>
               <h5>{items.snippet.channelTitle}</h5> 
              <p>{items.snippet.publishTime}</p>
              <button className="btnw"
              onClick={() => {
                dispatch(addVideo(items));
              }}
            > Watch Later</button>
            <Link to={`/Details/${items.id.videoId}`} ><button className="btnw">Details</button> </Link>
            </div>

            
          )
        })}
            </div>

      </div>
      
    );
}

export default Home;
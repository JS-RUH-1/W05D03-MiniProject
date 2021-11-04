import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addVideos, addVideo, removeVideo } from "./reducers/youtube/youtube"
import axios from "axios";


function Home() {
  const [video ,setVideo] = useState([]);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      youtube: state.youtube.videos,
    };
  });

  // const addVideo = () => {
  //   const video = {
    
  //   };

  //   dispatch(addVideo(video));
  // };

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&chart=mostPopular&key=AIzaSyBRKRVyKF2AshdxeZdDzIDL43Al8kHiFig")
      

      .then((res) => {
        console.log(res.data)
        setVideo(res.data.items)
       dispatch(addVideos(res.data.items));
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
            </div>

            
          )
        })}
            </div>
      </div>
      
    );
}

export default Home;
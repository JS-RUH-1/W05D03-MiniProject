import React from "react";
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addVideo} from '../reducer/videos'

const SingleVideo = () => {

    let dataFromStorage = JSON.parse(localStorage.getItem("singleVideo"))
    // console.log(dataFromStorage);


    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            video: state.Videos.videos
        }
    })

    
    const addVideoToWatchLater = () => {
        console.log(dataFromStorage);
        dispatch(addVideo(dataFromStorage))
    }
    // console.log(state);
    // console.log(state.video);
    

    return (
      <div className="singleVideo container mt-5">
        <div className="card mb-3">
          <iframe title={dataFromStorage.snippet.title} src={`https://www.youtube.com/embed/${dataFromStorage.id.videoId}`}></iframe>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="/watchLaterPage">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={addVideoToWatchLater}
                >
                Watch Later
                </button>
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default SingleVideo;
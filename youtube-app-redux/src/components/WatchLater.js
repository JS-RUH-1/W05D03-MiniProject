import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeVideo} from '../reducer/videos'

const WatchLater = () => {

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            video: state.Videos.videos
        }
    })

    // console.log(state);


    return (
      <div>
        <h1 className="m-5">Watch later Videos</h1>
        <div className="container row row-cols-1 row-cols-md-4 g-4">
            {state.video.map((ele,index) => (
            <div className="col" key={index}>
                <div className="card">
                <iframe
                    title={ele.snippet.title}
                    src={`https://www.youtube.com/embed/${ele.id.videoId}`}
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">{ele.snippet.title}</h5>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => dispatch(removeVideo(ele))}
                    >
                    Delete Video
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    );
}
 
export default WatchLater;
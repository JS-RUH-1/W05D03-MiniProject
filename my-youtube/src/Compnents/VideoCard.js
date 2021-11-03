import React, { useState, useEffect } from "react";
import "../Style/VideoCard.css";
import { Link } from "react-router-dom";
import WatchLater from "@material-ui/icons/WatchLater";
import { useSelector, useDispatch } from "react-redux";
import { addWatchLater } from "../Reducers/WatchLater/watchlater";
import { addDetails } from "../Reducers/Details/details";
export default function VideoCard({ video }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      videos: state.videos.videos,
      watchlater: state.watchlater.watchlater,
      details: state.details.details,
    };
  });
  const [watchLater, setwatchLater] = useState();
  function checkExist(video) {
    for (let i = 0; i < state.watchlater.length; i++) {
      const element = state.watchlater[i].id.videoId;
      console.log(video[i]);
      if (element === video.id.videoId) {
        alert("this video is alraedy in watchlist");
        return;
      }
    }
    setwatchLater(video);
    dispatch(addWatchLater(video));
  }

  return (
    <div className="videoCard">
      <Link
        to={`/detilas/${video.id.videoId}`}
        onClick={() => {
          dispatch(addDetails(video));
        }}
      >
        <img
          className="videoCard__thumbnail"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />
      </Link>

      <div className="videoCard__info">
        <div className="video__text">
          <h4>
            <Link
              onClick={() => {
                addDetails(video);
              }}
              to={`/detilas/${video.id.videoId}`}
            >
              {" "}
              {video.snippet.title}{" "}
            </Link>
          </h4>
          <p>{video.snippet.channelTitle}</p>
        </div>
        <div className="videoCard__info__Watch__Later__btn">
          <Link to={"/watchlater"}>
            <button
              onClick={() => {
                checkExist(video);
              }}
            >
              <WatchLater />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

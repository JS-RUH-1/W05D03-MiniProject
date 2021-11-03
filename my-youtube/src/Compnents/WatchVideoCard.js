import React, { useState, useEffect } from "react";
import "../Style/VideoCard.css";
import { Link } from "react-router-dom";
import WatchLater from "@material-ui/icons/WatchLater";
import { useSelector, useDispatch } from "react-redux";
import { deleteWatchLater } from "../Reducers/WatchLater/watchlater";
import { addDetails } from "../Reducers/Details/details";

export default function WatchVideoCard({ video }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      watchlater: state.watchlater.watchlater,
      details: state.details.details,
    };
  });
  const [watchLater, setwatchLater] = useState();

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
          <Link
          onClick={() => {
            addDetails(video);
          }}
          to={`/detilas/${video.id.videoId}`}
        > {video.snippet.title} </Link>
          <p>{video.snippet.channelTitle}</p>
        </div>
        <div className="videoCard__info__Watch__Later__div">
            <button
            className="videoCard__info__Watch__Later__btn"
              onClick={() => {
                console.log(video);
                setwatchLater(video);
                dispatch(deleteWatchLater(video));
                console.log(state.watchlater);
              }}
            >
              <WatchLater className="WatchLater__red" />
            </button>
        </div>
      </div>
    </div>
  );
}

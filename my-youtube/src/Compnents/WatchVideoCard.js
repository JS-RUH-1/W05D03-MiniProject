import React, { useState, useEffect } from "react";
import "../Style/VideoCard.css";
import { Link } from "react-router-dom";
import WatchLater from "@material-ui/icons/WatchLater";
import { useSelector, useDispatch } from "react-redux";
import { deleteWatchLater } from "../Reducers/WatchLater/watchlater";

export default function WatchVideoCard({ video }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      watchlater: state.watchlater.watchlater,
    };
  });
  const [watchLater, setwatchLater] = useState();

  return (
    <div className="videoCard">
      <img
        className="videoCard__thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="videoCard__info">
        <div className="video__text">
          <h4>
            <Link to="/detilas"> {video.snippet.title} </Link>
          </h4>
          <p>{video.snippet.channelTitle}</p>
        </div>
        <div className="videoCard__info__Watch__Later__btn">
          <Link to={"/watchlater"}>
            <button
              onClick={() => {
                console.log(video);
                setwatchLater(video);
                dispatch(deleteWatchLater(video));
                console.log(state.watchlater);
              }}
            >
              <WatchLater className="WatchLater__red" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

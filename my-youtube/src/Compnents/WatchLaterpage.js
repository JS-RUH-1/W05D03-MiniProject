import React from "react";
import "../Style/WatchLaterpage.css";
import { useSelector, useDispatch } from "react-redux";
import WatchVideoCard from "../Compnents/WatchVideoCard";

function WatchLaterpage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      watchlater: state.watchlater.watchlater,
    };
  });
  console.log(state.watchlater);
  return (
    <div className="watchLater">
      <h2>Watch later </h2>
      <div className="recommendeVideos__videos">
        {state.watchlater.map((vid) => {
          console.log(vid);
          return <WatchVideoCard video={vid} />;
        })}
      </div>
    </div>
  );
}

export default WatchLaterpage;

import "../App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../reducer/watchlater";

function WatchLater(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      watchLater: state.WatchLater.watchLater,
    };
  });
  const removeFrom = (id) => {
    dispatch(remove(id));
  };

  return (
    <div style={{display:"flex",flexDirection:'row',justifyContent:"center"}}>
      {state.watchLater.map((e) => (
        <div>
          <h1>{e.snippet.title}</h1>
          <Link to={`/video/${e.id}`}>
            <img src={e.snippet.thumbnails.high.url} />
          </Link>
          <button onClick={() => removeFrom(e.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default WatchLater;

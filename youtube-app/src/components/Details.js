import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addID } from "./reducers/id/id";
import { addWatch } from "../reducers/watch/watch";
import { WatchList } from "./WatchList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { addITEM } from "../reducers/item/item";

export const Details = () => {
  const state = useSelector((state) => {
    return {
      item: state.item.item,
    };
  });
  const dispatch = useDispatch();

  let [arr] = state.item.slice(-1);
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-6 offset-1">
                <div>
                  <iframe
                    width="560"
                    height="315"
                    title="video player"
                    src={`https://www.youtube.com/embed/${arr?.id}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <div className="row">
                    <div className="col-6 ">
                      <h6>{arr?.snippet?.localized?.title}</h6>
                    </div>
                    <div className="col-6 ">
                      <Link
                        class="btn btn-success btn-sm"
                        onClick={() => dispatch(addWatch(arr))}
                        to="/watch"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        ADD TO WATCH LIST
                      </Link>
                    </div>
                  </div>

                  <div className="col-9 ">
                    <p>{arr?.snippet?.description?.substr(0, 200)}</p>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



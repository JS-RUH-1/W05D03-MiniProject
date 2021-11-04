import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addID } from "../reducers/id/id";
import { addWatch, removeWatch } from "../reducers/watch/watch";

export const WatchList = () => {
  const state = useSelector((state) => {
    return {
      watch: state.watch.watch,
      id: state.id.id,
    };
  });

  const dispatch = useDispatch();

  return (
    <div>
      {state.watch.map((e) => {
        return (
          <div className="ui container">
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <iframe
                    width="560"
                    height="315"
                    title="video player"
                    src={`https://www.youtube.com/embed/${e.id}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <h4>{e.snippet.localized.title}</h4>
                  <button
                    class="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeWatch(e))}
                  >
                    REMOVE FROM WATCHLIST
                  </button>
                  <p>{e.snippet.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};



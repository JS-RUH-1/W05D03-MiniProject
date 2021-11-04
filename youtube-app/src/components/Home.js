// import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addID } from "../reducers/id/id";
import { addWatch, removeWatch } from "../reducers/watch/watch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { addItem } from "../reducers/item/item";
import { useState } from "react";

export const Home = () => {
  const [Vid, setVid] = useState([]);
  const state = useSelector((state) => {
    return {
      watch: state.watch.watch,
      id: state.id.id,
      item: state.item.item,
    };
  });

  // ADD VIDEO IDs TO REDUCER ID
  const dispatch = useDispatch();
  const add = (payload) => {
    dispatch(addID(payload));
  };
  // ADD VIDEO TO REDUCER WATCH
  //   const addWatch = (payload) => {
  //     dispatch(addWatch(payload));
  //   };

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCAxPHqAKvk-0MHkFMVZVMIWt4NKklhjbQ",
        {
          params: {
            _limit: 10,
          },
        }
      )
      .then((res) => {
        setVid(res.data.items);
        add(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {Vid.map((e) => {
              return (
                <div>
                  <img
                    src={e.snippet.thumbnails.high.url}
                    style={{ width: 560, height: 315 , marginBottom:10}}
                    alt="n"
                    
                  />
                  
                  <div className="row">
                    <div className="col-3">
                      <Link
                        onClick={() => dispatch(addItem(e))}
                        style={{ textDecoration: "none", color: "black" }}
                        to="/details"
                      >
                        <h6>{e.snippet.localized.title}</h6>
                      </Link>
                    </div>
                    <div className="col-3">
                      <Link
                        class="btn btn-success btn-sm"
                        onClick={() => dispatch(addWatch(e))}
                        to="/watch"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        ADD TO WATCH LIST
                      </Link>
                    </div>
                  </div>
                  <br></br><br></br>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../reducers/item/item";
import { useEffect } from "react";
import { addWatch } from "../reducers/watch/watch";

export const Search = () => {
  // const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const searchNow= () =>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyC8b31UPAFoSc-JNxWYU_L-jEqEkAgy68I
      `
    )
    .then((res) => {
      setResult(res.data.items);
      console.log(result);
      console.log("word search " + search);
    });
  }
//   useEffect(() => {
    
//   }, [search]);

  return (
    <div className="search-bar ui segment">
      <div className="">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-success" onClick={() =>searchNow()}>search</button>
        </div>
      </div>

      {result.map((e) => {
        return (
          <div>
            <img
              src={e?.snippet?.thumbnails?.high?.url}
              style={{ width: 560, height: 315, marginBottom: 10 }}
              alt="n"
            />

            <div className="row">
              <div className="col-3">
                <Link
                  onClick={() => dispatch(addItem(e))}
                  style={{ textDecoration: "none", color: "black" }}
                  to="/details"
                >
                  <h6>{e?.snippet?.title}</h6>
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
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

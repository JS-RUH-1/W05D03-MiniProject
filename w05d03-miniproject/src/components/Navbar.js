import * as ReactBootStrap from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { searchWord } from "../reducers/search/search";

function Navbar() {
  const [searchResult, setSearchResult] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      search: state.search.search,
    };
  });


  return (
    <div id="navbar">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Container>
          <Link className="Link_home" to="/Home">
            Yourtube{" "}
          </Link>
          <div id="Nav">
            <Link className="Link" to="/WatchList">
              Watch Later
            </Link>
          </div>
          <div className="d-flex" id="Link_search">
            <input
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchResult(e.target.value)}
            />
            <Link
              className="Link_search"
              to="/Search"
              variant="outline-success"
              onClick={(e)=> dispatch(searchWord(searchResult))}
            >
              Search
            </Link>
          </div>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
export default Navbar;

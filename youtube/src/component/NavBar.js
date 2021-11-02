import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Home from "./Home";
import Search from "./Search";
import { Add_videos } from "../reducers/video/video";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  // this.state = { value: "" };
  const [state, setState] = useState();
  const [v, setV] = useState([]);
  const dispatch = useDispatch();

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   setState({ value: event.target.value });
  // }

  function handleSubmit(event) {
    console.log(event.target[0].value);
    let state = event.target[0].value;
    setState(state);

    event.preventDefault();
  }

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${state}&key=AIzaSyBPfC-b8MXBZ_DXTuQZvIl-WjmeU7Nf1lI`
      )
      .then((res) => {
        setV(res.data.items);
        dispatch(Add_videos(v));

        console.log(v);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [state]);

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Search">Search</Link>
              </li>
              <li className="serch">
                <form action="/" method="get" onSubmit={handleSubmit}>
                  <label htmlFor="header-search">
                    <span className="visually-hidden">Search</span>
                  </label>
                  <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                  />
                  <button type="submit">Search</button>
                </form>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;

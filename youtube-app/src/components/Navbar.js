import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Younube
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link " href="#">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
              </a>
              <a class="nav-item nav-link" href="#">
                <Link
                  to="/watch"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Watchlist
                </Link>
              </a>
              <a class="nav-item nav-link" href="#">
                <Link
                  to="/search"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Search
                </Link>
              </a>
            </div>
          </div>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

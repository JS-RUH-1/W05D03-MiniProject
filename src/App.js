import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./pages/Home";
import Video from "./pages/Video";
import './style.css';
import 'bootstrap';
function App() {
  const state = useSelector((state) => {
    return {
        dark: state.dark.dark
    }
})
  useEffect(() => {
    if(state.dark) {
      document.body.style.backgroundColor = "#000";
    } else {
      document.body.style.backgroundColor = "#fff";

    }

  },[state.dark])
  return <Router>
      <Navbar />
      <div className={`container mt-3 ${state.dark? "dark" : ""}`}>

      <Search />

        <Switch>
              <Route path="/video/:id" component={Video} />
              <Route path="/" component={Home} />
        </Switch>
      </div>


    </Router>;

  
}

export default App;

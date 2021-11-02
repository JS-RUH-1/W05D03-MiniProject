import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import './style.css';

function App() {
  return <Router>
      <Navbar />
      <div className="container mt-3">
        <Switch>
              <Route path="/video/:id" component={Video} />
              <Route path="/" component={Home} />
        </Switch>
      </div>


    </Router>;

  
}

export default App;

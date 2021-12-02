import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import './App.css';
import {PopularList} from './PopularList';
import {Video} from './Video';
import {Search} from './Search';
import {WatchList} from './WatchList';
import {Store} from './PopularList';

function App() {
  const[key, setKey] = useState("");
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#006666"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Videos Hub</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/WatchList">Watch List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <Routes>
          <Route exact path="/" element={<PopularList setKey={setKey}/>}/>
          <Route path="Search" element={<Search item={key}/>}/>
          <Route path="video/:vid" element={<Video />}/>
          <Route path="WatchList" element={<WatchList />}/>
        </Routes>
    </Router>
    
  );
}

export default App;

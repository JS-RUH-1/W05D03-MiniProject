import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Content from './components/Content'
import {DataContext} from './context/Context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleVideo from './components/SingleVideo'
import WatchLAter from './components/WatchLater'
// const dotenv = require('dotenv')

// dotenv.config()


function App() {
  const [popularVedies, setPopularVedies] = useState([])

  useEffect(() => {
    async function getVideos() {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyANY5966vhXVzsx71CpSZHZAWmA3YWTXsc`
        const res = await axios.get(url)
        setPopularVedies(res.data.items)
        // console.log(res.data.items);
      } catch (err) {
        console.log(err);
      }
    }
    getVideos()
  }, [])

  
  return (
    <div>
      <DataContext.Provider value={{ popularVedies, setPopularVedies }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/singleVideo">
              <SingleVideo />
            </Route>
            <Route path="/watchLaterPage">
              <WatchLAter />
            </Route>
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
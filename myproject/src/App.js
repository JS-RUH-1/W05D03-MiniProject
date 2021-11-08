import './App.css';
import Header from './Header';
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Watch from './Watch'
import Search from './Search';
import Home from './Home';
import Details from './Details';
import { useState, useEffect} from 'react';
import { ThemeProvider } from '@mui/system';
import Splash from './Splash';
import axios from 'axios';

// ____________________________
const LightTheme ={
  pageBackground :"white" ,
  titleColor :"#dc658b" ,
  tagLineColor:"black"
}
const DarkTheme={
  pageBackground :"#282c36" ,
  titleColor :"lightpink" ,
  tagLineColor:"lavender"
}
const themes={
  light:LightTheme,
  dark:DarkTheme,
}
// ______________________________


function App() {
  const [video ,setVideo] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&chart=mostPopular&key=AIzaSyAq7aCKZ9Mmh-hkA4Svq2KlZ-F1Ru1XEDI")
      
      

      .then((res) => {
        console.log(res.data)
        setVideo(res.data.items)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [theme,setTheme]=useState("Light")
  return (
    
<div >
{/* <ThemeProvider theme={themes[theme]}>
     <Splash theme={theme} setTheme={setTheme} />
      </ThemeProvider> */}
  <Router>
    <div>
    <Header/>
    {console.log(video)}
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/Watch"><Watch/></Route>
      <Route path="/Search"><Search/></Route>
      <Route path="/Details/:id" ><Details data={video}/></Route>

    </Switch>
    </div>
  </Router>
      </div>
      
    );
}

export default App;

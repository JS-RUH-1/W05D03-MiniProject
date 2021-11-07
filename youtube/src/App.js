import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {DataContext} from './component/context/context';
import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import {BrowserRouter  as Router ,Route , Switch } from 'react-router-dom'
import Single from './component/single';
import Wahtch from './component/Whatch';
import Search from "./component/Search";


function App() {

  const [popularV, setPopularV] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&chart=mostPopular&key=AIzaSyA9BagkdJCuDqDwJqQsSFppSxL-h5d8eZA"
        );
        setPopularV(res.data.items);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    getInfo();
  }, []);



  return (
    <div className="App">
      <DataContext.Provider value={{popularV, setPopularV}}>
    <Router>
    {/* عشان يبقى ثابت  */}
    {/* احتمال وجود روابط في الناف بار  */}

    <Navbar />
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/singleComponent"> <Single/> </Route>
      <Route path="/watchLater">
       <Wahtch/>
      </Route>
      <Route path="/Search">
       <Search/>
      </Route>
      
      </Switch>
    </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
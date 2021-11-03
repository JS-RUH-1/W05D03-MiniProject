import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecommVideo from './Components/RecommVideo';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import SearchPage from './Components/SearchPage';
import WatchLater from './Components/WatchLater';

function App() {
  return (
    <div className="App">
    <Router> 
    <Header/>
    <Sidebar/>
    <Switch>
    <Route path="/search/:searchTerm">

    <SearchPage/> </Route>
<Route path="/watchlater">
<WatchLater/>
</Route>
    <Route exact path="/">
    <div className="app__page">
     
      <RecommVideo/>
    </div>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;

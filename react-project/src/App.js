import './App.css';
import React, { useState } from 'react';

// import {display} from './Reducers/YoutReducer'
//  import {useSelector ,useDispatch} from 'react-redux'
  
  
 import {Route,BrowserRouter as Router ,Switch,Link} from 'react-router-dom';
 
import Fetch from './Fetch';
import Search from './Search';
import WatchLater from './WatchLater';



export default function App() {

  const[data,setData]=useState([])


  // const state =useSelector((state) => {

  //   return {
  //     disYout:state.YoutReducer.yout,
  //     count :state.YoutReducer.count
  //   }
  // })

  // const dispatch=useDispatch()


  return (
     <>

<Router>
<nav>
<ul>
     <li> <Link to='/' exact>
     <img className="IMG"
      src="https://img.icons8.com/dotty/40/000000/youtube-play.png" alt=''/>

       {/* Home  */}
      </Link></li>
     <li><Link to='/Search'>
     <img src="https://img.icons8.com/material/40/000000/search--v3.png" alt=''/>
     {/* Search */}
      </Link></li> 
     <li><Link to='/WatchLater'>
     
     <img src="https://img.icons8.com/fluency-systems-regular/40/000000/mark-as-favorite.png" alt=''/>

     {/* <img src="https://img.icons8.com/ios-filled/40/000000/mark-as-favorite.png" alt=''/>
      */}
     
      </Link></li>

</ul>
</nav>
 

<Switch>

  <Route path='/' exact component={Fetch}/> 
  <Route path='/Search' component={Search}/> 
  <Route path='/WatchLater' component={WatchLater}/> 

</Switch>
</Router>


 

     </>
  );
}

 

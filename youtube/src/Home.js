
import axios from "axios";
import { useEffect, useState } from "react";
import { addvidWatchlater } from './reducers/watchReducer'
import {useDispatch} from "react-redux";
import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
    useHistory
} from "react-router-dom"

function Home(){

    const [popularV,setPopularV] = useState([]);
    const dispatch = useDispatch();


    useEffect (()=> {
        axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=6&chart=mostPopular&regionCode=US&key=AIzaSyCI9vLTqJMp846kxsj3fMRQdv3QT3qDrqQ')
            .then(response => {
        console.log(response.data.items);
        setPopularV(response.data.items);
        });
    }, []);

    return (

        <div className= "style">
        {popularV.map((e)=> {
            return(
                <div>
                <Link to={{
                    pathname: `/video/${e.id}`,
                    state: {
                        videoInfo: e,
                    }
                }}>

               <img src={e.snippet.thumbnails.medium.url}></img>
              <h3>{e.snippet.title}<br/></h3> 
              <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
              
                </Link>
                <button className = "btn" onClick= {()=> {dispatch(addvidWatchlater(e))}}>Watch Laeter</button>
</div>)}
            )
        }
        </div>
        
    )
    }


    export default Home;


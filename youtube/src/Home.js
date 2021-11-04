
import axios from "axios";
import { useEffect, useState } from "react";
import { addvidWatchlater } from './reducers/watchReducer'
import {useDispatch} from "react-redux";

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

              {/* <img src={e.snippet.thumbnails.medium.url}></img> */}
              <iframe title={e.snippet.title} src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
              <h3>{e.snippet.title}<br/></h3> 
              <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
              <button onClick= {()=> {dispatch(addvidWatchlater(e))}}>Add To Watch Laeter</button>
              
                </div>)}
            )
        }
        </div>
        
    )
    }


    export default Home;


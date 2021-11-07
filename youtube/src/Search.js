import {useEffect,useState } from "react";
import axios from "axios";
import './App.css';
import { addvidWatchlater } from './reducers/watchReducer'
import {useDispatch,useSelector} from "react-redux";
import {saveWord,saveArray} from "./reducers/searchReducer";

function Search (){

    const [ searchedVideos, setSearchedVideos ] = useState ([]);

    const dispatch = useDispatch();
    const state = useSelector((store)=> {


        return {
            searchW: store.searches.searchWord,
        }
    })

    
    useEffect (()=> {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${state.searchW}&key=AIzaSyDLyTSLIKCjnCb0gmVzPcPnq2q1-dngnoY`)
     .then(response => {
        setSearchedVideos(response.data.items)
        
        });
     },[])


 return(

    <div className = "style">

    <div class="container-fluid">
    <div class="row mt-5 justify-content-md-center">
        {
            searchedVideos.map(
                (e) => {
                    return (
                        <div class="col video-grid mt-3" id={e.id}>
                            <img src={e.snippet.thumbnails.medium.url} width={270} height={150}></img>
                            <h6 class="video-title">{e.snippet.title}</h6>
                            <small>{e.snippet.channelTitle} . {e.snippet.publishedAt}</small>
                            <br></br>
                            <button className = "btn" onClick= {(e)=> {dispatch(addvidWatchlater(e))}}>Add To Watch Laeter</button>
                        </div>
                    )
                }
            )
        
        }
    </div>  
</div>
 </div> 


 )}
export default Search;


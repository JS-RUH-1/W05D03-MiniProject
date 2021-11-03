import {useEffect } from "react";
import axios from "axios";
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {saveWord,saveArray} from "./reducers/searchReducer";

function Search (){

    const dispatch = useDispatch();
    const state = useSelector((store)=> {


        return {
            searchW: store.searches.searchWord,
            searchArr: store.searches.searchArray,
        }
    })

    
    useEffect (()=> {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${state.searchW}&key=AIzaSyCoeA6V0VFMQ3XyN5AkjFsInchMZnlVUgY`)
     .then(response => {

        dispatch(saveArray(response.data.items))
        
        });
     },[])


 return(

    <div>

{

    state.searchArr.map((e)=> {
    return(
        <div>
    <img src={e.snippet.thumbnails.medium.url}></img>
    <h3>{e.snippet.title}<br/></h3> 
    <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
        </div>)})

}
 </div> 


 )}
export default Search;
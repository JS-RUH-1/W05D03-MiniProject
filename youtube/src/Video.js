import {useEffect,useState } from "react";
import axios from "axios";
import './App.css';
import { addvidWatchlater } from './reducers/watchReducer'
import {useDispatch,useSelector} from "react-redux";
import {saveWord,saveArray} from "./reducers/searchReducer";

function Video (props){

return(
<div>
    <iframe width="891" height="501" src={`https://youtube.com/embed/${props.location.state.videoInfo.id}`} frameborder="0" allowFullScreen></iframe>
    <h3>{props.location.state.videoInfo.snippet.title}</h3>
    <p>{props.location.state.videoInfo.snippet.description}</p>
    <p>{props.location.state.videoInfo.snippet.channelTitle} . {props.location.state.videoInfo.snippet.publishedAt}</p>

</div>


)}
export default Video;

/*{

    state.searchArr.map((e)=> {
    return(
        <div>
    <img src={e.snippet.thumbnails.medium.url}></img>
    <h3>{e.snippet.title}<br/></h3> 
    <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
        </div>)})

        state.searchArray.map(
                (element) => {
                    return (
                        <div class="col video-grid mt-3" id={element.id}>
                            <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                            <h6 class="video-title">{element.snippet.title}</h6>
                            <small>{element.snippet.channelTitle}</small>
                            <br></br>
                            <small class="text-muted">1 Month ago </small>
                        </div>
                    )
                }
            )

}*/
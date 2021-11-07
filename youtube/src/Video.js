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


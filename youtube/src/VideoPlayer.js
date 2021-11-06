import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import {  BrowserRouter as Router,
	Link,
} from "react-router-dom"
import { addToWatchList, removeFromWatchList } from "./states/watchlater/watchlater";

const axios = require('axios');

function VideoPlayer (props){
    const dispatch = useDispatch();
  
	const state = useSelector((state) => {
		return {
			watchlater: state.watchlater.watchlater,
		};
	});

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    const [ popularYT, setPopularYT ] = useState ([]);
    useEffect (
        ()=>{
            axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=US&key=AIzaSyB8yo4QnKx8hMK-hfJtPleb3JNquh9eZF4")
            .then(
                (response) => {
                    setPopularYT(response.data.items);
                }
            )
        }, []
    )

    return (
        <div className="row container-fluid mt-5">
            <div className="me-5 col-8">
                <iframe className="mb-2" width="891" height="501" src={`https://www.youtube.com/embed/${props.location.state.videoInfo.id}`} title="YouTube video player" frameborder="0" allowfullscreen></iframe>    
                <h6>{props.location.state.videoInfo.snippet.title}</h6>
                <div className="row">
                    <div className="col-6">
                        <small className="text-muted">{props.location.state.videoInfo.statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Views • {props.location.state.videoInfo.snippet.publishedAt.substring(0,10)}</small>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <i className="bi bi-hand-thumbs-up fs-6"></i>{kFormatter(props.location.state.videoInfo.statistics.likeCount)}
                            </div>
                            <div className="col-3">
                                <i className="bi bi-hand-thumbs-down fs-6"></i>{kFormatter(props.location.state.videoInfo.statistics.dislikeCount)}
                            </div>
                            <div className="col-5 watchlater-button">
                            {
                                (state.watchlater.filter(e => e.id === props.location.state.videoInfo.id).length > 0)
                                ?<div onClick={()=>dispatch(removeFromWatchList(props.location.state.videoInfo.id))}><i className="bi bi-folder-minus"></i> Remove from Watchlist</div>
                                :<div onClick={()=>dispatch(addToWatchList(props.location.state.videoInfo.id,props.location.state.videoInfo))}><i className="bi bi-folder-plus"></i> Add to Watchlist</div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className="col-3">
            {
                popularYT.map(
                    (element) => {
                        return (
                            <Link to={{
                                    pathname: `/video/${element.id}`,
                                    state: {
                                    videoInfo: element,
                                    },
                                }} 
                            className="col video-flex">
                                <img src={element.snippet.thumbnails.medium.url} width={170} height={95}></img>
                                <div className="ms-2">
                                    <p className="video-title-size mb-0">{element.snippet.title}</p>
                                    <p className="text-muted video-small-det mb-1 text-nowrap">{element.snippet.channelTitle}</p>
                                    <p className="text-muted video-small-det text-nowrap">{kFormatter(element.statistics.viewCount)} • 1 Month ago </p>
                                </div>
                            </Link>
                        )
                    }
                )
            }
            </div>
        </div>
    );
}

export default VideoPlayer;
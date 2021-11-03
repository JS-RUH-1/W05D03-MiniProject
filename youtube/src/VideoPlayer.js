import { useEffect, useState } from 'react';
import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
    useHistory
} from "react-router-dom"

const axios = require('axios');

function VideoPlayer (props){

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
        <div class="row container-fluid mt-5">
            <div class="me-5 col-8">
                <iframe class="mb-2" width="891" height="501" src={`https://www.youtube.com/embed/${props.location.state.videoInfo.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                <h6>{props.location.state.videoInfo.snippet.title}</h6>
                <div class="row">
                    <div class="col-6">
                        <small class="text-muted">{props.location.state.videoInfo.statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Views • {props.location.state.videoInfo.snippet.publishedAt.substring(0,10)}</small>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3">
                                <i class="bi bi-hand-thumbs-up fs-6"></i>{kFormatter(props.location.state.videoInfo.statistics.likeCount)}
                            </div>
                            <div class="col-3">
                                <i class="bi bi-hand-thumbs-down fs-6"></i>{kFormatter(props.location.state.videoInfo.statistics.dislikeCount)}
                            </div>
                            <div class="col-3">
                                <Link>
                                    <i class="bi bi-folder-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div class="col-3">
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
                            class="col video-flex">
                                <img src={element.snippet.thumbnails.medium.url} width={170} height={95}></img>
                                <div class="ms-2">
                                    <p class="video-title-size mb-0">{element.snippet.title}</p>
                                    <p class="text-muted video-small-det mb-1 text-nowrap">{element.snippet.channelTitle}</p>
                                    <p class="text-muted video-small-det text-nowrap">{kFormatter(element.statistics.viewCount)} • 1 Month ago </p>
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
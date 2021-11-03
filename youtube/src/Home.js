import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateWatchList } from "./states/watchlater/watchlater";
import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
    useHistory
} from "react-router-dom"
const axios = require('axios');
//publishTime={element.snippet.publishedAt} views={element.statistics.viewCount} title={element.snippet.title} channel={element.snippet.channelTitle} description={element.snippet.description}
function Home (){
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
        <div class="container-fluid">
            <div class="row mt-5 justify-content-md-center">
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
                                class="col video-grid mt-3">
                                    <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                                    <h6 class="video-title">{element.snippet.title}</h6>
                                    <small>{element.snippet.channelTitle}</small>
                                    <br></br>
                                    <small class="text-muted">{element.statistics.viewCount} • 1 Month ago </small>
                                    <i class="bi bi-folder-plus"></i>
                                </Link>
                            )
                        }
                    )
                }
            </div>  
        </div>
    );
}

export default Home;
import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../states/watchlater/watchlater";
import { toggleDarkMode } from "../states/darkmode/darkmode";

import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
    useHistory
} from "react-router-dom"

const axios = require('axios');

function Home (){

    const dispatch = useDispatch();
  
	const state = useSelector((state) => {
		return {
			watchlater: state.watchlater.watchlater,
            darkMode: state.darkmode.darkmode,

		};
	});


    const [ popularYT, setPopularYT ] = useState ([]);
    const [ wlstate, setwlstate ] = useState ([]);

    useEffect (
        ()=>{
            axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=US&key=AIzaSyB8yo4QnKx8hMK-hfJtPleb3JNquh9eZF4")
            .then(
                (response) => {
                    setPopularYT(response.data.items);
                    setwlstate ( state.watchlater )
                }
            )
        }, [state.watchlater]
    )

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-md-center">
                {
                    popularYT.map(
                        (element) => {
                            return (
                                <div className="col video-grid mt-3">
                                    <Link to={{
                                            pathname: `/video/${element.id}`,
                                            state: {
                                            videoInfo: element,
                                            },
                                        }} 
                                        className="video-grid">
                                        <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                                        <h6 className="video-title">{element.snippet.title}</h6>
                                        <small>{element.snippet.channelTitle}</small>
                                        <br></br>
                                        <small className="text-muted">{kFormatter(element.statistics.viewCount)} • At {element.snippet.publishedAt.substr(0,7)} </small>
                                    </Link>
                                    {
                                        (wlstate.filter(e => e.id === element.id).length > 0)
                                        ?<div onClick={()=>dispatch(removeFromWatchList(element.id))}><i className="bi bi-folder-minus"></i> Remove from Watchlist</div>
                                        :<div onClick={()=>dispatch(addToWatchList(element.id,element))}><i className="bi bi-folder-plus"></i> Add to Watchlist</div>
                                    }
                                </div>
                            )
                        }
                    )
                }
            </div>  
        </div>
    );
}

export default Home;
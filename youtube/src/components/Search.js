import React from 'react'
import { useEffect, useState } from 'react';
import {  BrowserRouter as Router,
	useParams} from "react-router-dom"

const axios = require('axios');

function Search (prop){
    const [ searchedVideos, setSeachedVideos ] = useState ([]);
    const { searchString } = useParams();

    useEffect (
        ()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${prop.computedMatch.params.searchString}&key=AIzaSyB8yo4QnKx8hMK-hfJtPleb3JNquh9eZF4`)
            .then(
                (response) => {
                    setSeachedVideos(response.data.items);
                }
            )
        }, []
    )

    return (
        <div class="container-fluid">
            <div class="row mt-5 justify-content-md-center">
                {
                    searchedVideos.map(
                        (element) => {
                            return (
                                <div class="col video-grid mt-3" id={element.id}>
                                    <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                                    <h6 class="video-title">{element.snippet.title}</h6>
                                    <small>{element.snippet.channelTitle}</small>
                                    <br></br>
                                    <small class="text-muted">At {element.snippet.publishedAt.substr(0,7)} </small>
                                </div>
                            )
                        }
                    )
                }
            </div>  
        </div>
    );
}

export default Search;
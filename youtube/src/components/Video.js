import { useEffect, useState } from 'react';
const axios = require('axios');

function Api (){
    const [ popularYT, setPopularYT ] = useState ([]);
    useEffect (
        ()=>{
            axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=SA&key=AIzaSyAiXUD2LMBuKwcDEHTQaVPjNlEsUfs2qZ0")
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
                                <div class="col video-grid mt-3" id={element.id}>
                                    <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                                    <h6 class="video-title">{element.snippet.title}</h6>
                                    <small>{element.snippet.channelTitle}</small>
                                    <br></br>
                                    <small class="text-muted">{element.statistics.viewCount} • 1 Month ago </small>
                                </div>
                            )
                        }
                    )
                }
            </div>  
        </div>
    );
}

export default Api;
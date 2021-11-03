import { useEffect, useState } from 'react';
const axios = require('axios');

function VideoPlayer (){
    const [ video, setVideo ] = useState ([]);
    useEffect (
        ()=>{
            axios.get("")
            .then(
                (response) => {
                    setVideo(response.data.items);
                }
            )
        }, []
    )

    return (
        <div class="container-fluid">
            <div class="row mt-5 justify-content-md-center">
                <iframe width="420" height="345" src={video}></iframe>            
            </div>  
        </div>
    );
}

export default VideoPlayer;
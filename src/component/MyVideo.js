import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

 export default function MyVideo() {

    const [ video, setVideo ] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM`).then((res) => {
        setVideo(res.data.items[0])
        })
    }, [])

    return (
         <div>
        <h1>{video?.snippet?.title}</h1>
        <iframe  width="900"
         height="600" 
         src={`https://www.youtube.com/embed/${id}`}
         title="YouTube video player" 
         frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture" allowfullscreen/>
        </div>)
       
  
}




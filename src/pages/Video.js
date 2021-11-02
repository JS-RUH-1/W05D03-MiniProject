import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Video() {
    const { id } = useParams();
    const [ video, setVideo ] = useState({})
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM`).then((res) => {
          //  setVideo(res.data.items[0])
          setVideo(res.data.items[0])
        })
    }, [])
    return <div>
        <h1>{video?.snippet?.title}</h1>

        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>;
}
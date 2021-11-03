import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { watchLater } from "../reducers/watch_later";

export default function Video() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [ video, setVideo ] = useState({})
    const state = useSelector((state) => {
        return {
            watchLater: state.watchLater.watchLater
        }
    })
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM`).then((res) => {
          //  setVideo(res.data.items[0])
          setVideo(res.data.items[0])
        })
    }, [])
    if(!video?.snippet) return <div>Video details not found. </div>
    return <div>
        <h1>{video?.snippet?.title}</h1>

        <iframe className="mb-4" width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>
            <p><b>Published:</b> {(new Date(video.snippet.publishedAt)).toLocaleString()}</p>
           
        {state.watchLater.some(v => v.id === id) ? 
        <button className="btn btn-danger" onClick={() => dispatch(watchLater.remove(id))}>Remove from watch later</button>
    :   <button className="btn btn-primary" onClick={() => dispatch(watchLater.add(video))}>Add to watch later</button>}
        
        <p className="mt-4"><b>Description:</b> {video.snippet.description}</p>
        </div>
    </div>;
}
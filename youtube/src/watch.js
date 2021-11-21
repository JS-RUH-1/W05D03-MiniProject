import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeVideo } from './reducers/whatchLater/whatchLater'
import { Link } from 'react-router-dom'

export default function Watch() {
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(true)
    const state = useSelector((state) => { 
        console.log(state)
        return {
            watchVideos: state.watchLater.watchVideos,
        };
      });

    return (
        <div className='watch-div'>
            <div onClick={()=> setShow(!show)}  className='watch-div-first'>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: 'none', display: 'block', width: '25px', height: "25px"}}><g ><path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z" ></path></g></svg>
            watch-later
            </div>
            <div style={ show? {display: 'none'} : {display: 'block'}} className='watch-div-second'>
            {state.watchVideos.map((clip) => (
            <Link to={clip.id}>
                <div key={clip.id} className='clip-info'>
                    <svg id='delete' onClick={()=> dispatch(removeVideo(clip))} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none;', display: 'block;', width: '20px', height: '20px'}}><g ><path d="M11,17H9V8h2V17z M15,8h-2v9h2V8z M19,4v1h-1v16H6V5H5V4h4V3h6v1H19z M17,5H7v15h10V5z" ></path></g></svg>
                <div className='clip-texts'>
                    <h2>{clip.snippet.title.length > 40 ? clip.snippet.title.slice(0, 40) + '...' : clip.snippet.title}</h2>
                    <span>{clip.snippet.channelTitle}</span><br/>
                    <span>{clip.snippet.publishedAt}</span>
                </div>
                <img width="90px" height='60px' src={clip.snippet.thumbnails.default.url}/>
                </div>
               </Link>
            ))}
            </div>
        </div>
    )
}

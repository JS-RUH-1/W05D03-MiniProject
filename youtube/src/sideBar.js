import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Ads from './ads';
import Watch from './watch';
import { Link } from 'react-router-dom'

export default function Sidebar(props) {

    const dispatch = useDispatch();
    const state = useSelector((state) => { 
        return {
          popular: state.popularV.popularVideos,
        };
      });

    return (
        <div>
            <div className="clip-div">
            <Watch/>
            <Ads/>
            {state.popular.map((clip) => (
                <Link to={clip.id.videoId}>
                <div key={clip.id.videoId} className='clip-info'>
                <div className='clip-texts'>
                    <h2>{clip.snippet.title.length > 40 ? clip.snippet.title.slice(0, 40) + '...' : clip.snippet.title}</h2>
                    <span>{clip.snippet.channelTitle}</span><br/>
                    <span>{clip.snippet.publishedAt}</span>
                </div>
                <img width="168px" height='100px' src={clip.snippet.thumbnails.default.url}/>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

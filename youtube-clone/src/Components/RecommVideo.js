import React from 'react';
import "./RecommVideo.css"
import VideoCard from './VideoCard';

function RecommVideo() {
    return ( 
<div className="recommendedVid">
<h2>Recommended</h2>
<div className="recommendedVideos__videos">
<VideoCard/>
</div>
</div>
);
}

export default RecommVideo;
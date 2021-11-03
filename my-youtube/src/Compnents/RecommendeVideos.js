import React from "react";
import "../Style/RecommendeVideos.css";
import VideoCard from "../Compnents/VideoCard";
import { useSelector, useDispatch } from "react-redux";
function RecommendeVideos() {
  const state = useSelector((state) => {
    return {
      videos: state.videos.videos,
    };
  });
  console.log(state.videos);

  return (
    <div className="recommendeVideos">
      <h2>Popular Videos</h2>
      <div className="recommendeVideos__videos">
        {state.videos.map((vid) => {
          console.log(vid);
          return <VideoCard video={vid} />;
        })}
      </div>
    </div>
  );
}

export default RecommendeVideos;

// back inside div recommendeVideos__videos
// {state.videos.map((vid) => {
//   console.log(vid);
//   return (
//     <VideoCard
//     video={vid}
//     />
//   );
// })}

import React from "react";
import "../Style/SearchPage.css";
import "../Style/RecommendeVideos.css";
import VideoCard from "../Compnents/VideoCard";
import { useSelector } from "react-redux";

function SearchPage() {
  const state = useSelector((state) => {
    return {
      searchVideos: state.searchVideos.searchVideos,
    };
  });
  return (
    <div className="searchPage">
      <h2>Search Page</h2>
      <div className="recommendeVideos__videos">
        {state.searchVideos.map((vid) => {
          console.log(vid);
          return <VideoCard video={vid} />;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
// <VideoCard video={vidt} />

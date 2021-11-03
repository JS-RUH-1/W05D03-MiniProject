import React from "react";
import "../Style/SearchPage.css";
import VideoCard from "../Compnents/VideoCard";

function SearchPage() {
  return (
    <div className="searchPage">
      <VideoCard
        title="Become web dev"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://media-exp1.licdn.com/dms/image/C5603AQEgIAmbHoCUIA/profile-displayphoto-shrink_100_100/0/1626620202480?e=1641427200&v=beta&t=IvYwy89hTSEasvqrnrYBgmL3385SjMopnJ-7JaVYALU"
        channel="Abdullah-sa"
        image="https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;

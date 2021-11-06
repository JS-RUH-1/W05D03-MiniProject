import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAVideo} from "../reducers/videos/videos";


function WatchList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      videos: state.videos.videos,
    };
  });
  function removeFromList(curr) {
    dispatch(removeAVideo(curr));
    console.log(state.videos);
  }

  return (
    <div id="watchlist">
      {state.videos.length == 0 ? (
        <h1>Nothing to show here</h1>
      ) : (
        state.videos.map((e) => (
          <div className="watchlist_video_card_with_delete" key={e.id}>
            <button className="delete_button" onClick={() => removeFromList(e)}>
              ×
            </button>
            <div className="watchlist_video_card">
              <div>
                <iframe
                  className="watchlist_video"
                  height={e.snippet.thumbnails.standard?.height + "px"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="play_iframe"
                  src={"https://www.youtube.com/embed/" + e.id}
                ></iframe>
              </div>
              <div>
                <h1>{e.snippet.title}</h1>
                <h2>{e.snippet.publishedAt}</h2>
                <h4>{e.snippet.channelTitle}</h4>
                <h6>{e.snippet.description}</h6>
              </div>
            </div>
          </div>
        ))
      )}
      
    </div>
  );
}
// USE HISTORY BECAME USE MAP THANKS TO THE LATEST UPDATE TO REACT ROUTERS
export default WatchList;

/*<iframe src='https://www.youtube.com/watch?v=Ks-_Mh1QhMc&' title="description"></iframe>
      <iframe src="demo_iframe.htm" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>
      <p><a href="https://www.youtube.com/watch?v=pXDx6DjNLDU" target="iframe_a">W3Schools.com</a></p>*/

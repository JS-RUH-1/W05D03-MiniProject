import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../reducer/watchlater";

export default function MyVideo() {
  const dispatch = useDispatch();
  const [video, setVideo] = useState({});
  const { id } = useParams();

  const state = useSelector((state) => {
    return { watchlist: state.WatchLater.watchLater };
  });

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
      });
  }, []);

  const addTo = () => {
    dispatch(add(video));

  };


  return (
    <div className="continer">
     <div>
      <h2>{video?.snippet?.title}</h2>
      </div>
    <div>
      <iframe
        width="500"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
        allowfullscreen
      />
      </div>
      <div>

      {state.watchlist.every((e) => e.id !== id) && (
        <button onClick={() => addTo()}>Watch Later</button>
      )}
      </div>
    </div>
  );
}


import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";


function Search(){
const [videosList,setVideosList] = useState([])
const dispatch = useDispatch();
const state = useSelector((state) => {
        return {
          search: state.search.search,
        };
      });
  useEffect(() => {
      console.log("111",state.search)
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${state.search}&type=video&key=AIzaSyBlbXfHThjv2icSUxzRD6QbpHpjU8CSXm0` )
      .then((res) => {
          setVideosList(res.data.items)
        console.log(res.data)//.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.search]);
  
  

    return (
        <div id="watchlist">
        {videosList.length == 0 ? (
          <h1>Nothing to show here</h1>
        ) : (
          videosList.map((e) => (
            <div className="watchlist_video_card_with_delete" key={e.id.videoId}>
              <div className="watchlist_video_card">
                <div>
                  <iframe
                    className="watchlist_video"
                    height={e.snippet.thumbnails.high?.height + "px"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="play_iframe"
                    src={"https://www.youtube.com/embed/" + e.id.videoId}
                  ></iframe>
                </div>
                <div id="video_page_details">
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
    )}

export default Search;

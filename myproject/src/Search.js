import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addVideos,addVideo } from "./reducers/youtube/youtube";
import './App.css';

function Search() {
  const [video, setVideo] = useState([]);
  const [videoSearch, setVideoSearch] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${videoSearch}&key=AIzaSyAq7aCKZ9Mmh-hkA4Svq2KlZ-F1Ru1XEDI`
      )
      

      .then((res) => {
        console.log(res.data);
        setVideo(res.data.items); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [videoSearch]);

  return (
    <div className="vid">
      <div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setVideoSearch(e.target.value);
            }}
          />
        </Form>
      </div>
      <div>
      {(function() {
          if (videoSearch==undefined||videoSearch=="") {
            return (<h2> Search about video </h2>);
          } else {
            return (
              video.map((items) => {
                return (
                  <div className="search1">
                    <iframe
                      width="420"
                      height="345"
                      src={`https://www.youtube.com/embed/${items.id.videoId}`}
                    ></iframe>
                    <h2>{items.snippet.title}</h2>
                    <h5>{items.snippet.channelTitle}</h5>
                    <p>{items.snippet.publishTime}</p>
                    <button className="btnw"
                      onClick={() => {
                        dispatch(addVideo(items));
                      }}
                    >
                      watch Later
                    </button>
                  </div>
                );
              })
            )
            
          }
        })()}
        
      </div>
    </div>
  );
}
export default Search;

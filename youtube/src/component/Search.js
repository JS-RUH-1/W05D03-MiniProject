import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { addWatch } from "../reducers/watch/watch";
// import { useDispatch, useSelector } from "react-redux";

function Search() {
  const [result, setResult] = useState();
  const [finalResult, setFinalResult] = useState();

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    let result = event.target[0].value;
    setResult(result);
    // console.log("Result is : " + state.video[0].snippet.title);

    // for (let i = 0; i <= state.video.length; i++) {
    //   //   console.log(state.video[i]);
    //   if (state.video.snippet.title.includes(result)) {
    //     setFinalResult(result);
    //     console.log(finalResult);
    //   }
    // }
    // for loop for state.video
    // if state.video.snippet.tittle.includes(result)
    // setFinalResult
  }

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${result}&key=AIzaSyBU6_Wp4jkeGmjxVuw52LdkvsbmtLvLUlI`
      )
      .then((res) => {
        setFinalResult(res.data.items);

        console.log(finalResult);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [result]);

  function addwatch(element) {
    let arr = [];
    arr.push(element);
    dispatch(addWatch(arr));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header-search">
          <span className="visually-hidden">Search</span>
        </label>
        <input type="text" id="header-search" placeholder="Search" name="s" />
        <button type="submit">Search</button>
      </form>

      {(() => {
        if (result == null) {
          return <div></div>;
        } else if (result !== null) {
          return (
            <div>
              {finalResult.map((element, index) => {
                return (
                  <div className="card">
                    <h3>Title : {element.snippet.title}</h3>
                    <br></br>
                    <iframe
                      key={index}
                      width="100%"
                      src={`https://www.youtube.com/embed/${element.id.videoId}`}
                    ></iframe>
                    <br></br>
                    <h4>Channel : {element.snippet.channelTitle}</h4>
                    <br></br>
                    <h6>Published At : {element.snippet.publishedAt}</h6>
                    <br></br>
                    <h5>Description: </h5>
                    <p>{element.snippet.description}</p>
                    <br></br>
                    <button onClick={() => addwatch(element)}>
                      Add To WatchList
                    </button>
                  </div>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}
export default Search;

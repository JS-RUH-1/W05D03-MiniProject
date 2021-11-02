import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function Search() {
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      video: state.video.video,
    };
  });
  console.log(state);
  return (
    <div>
      {/*  {state.vedio.map((element) => {
    //     return (
    //       <div className="card">
    //         <h3>Title : {element.snippet.title}</h3>
    //         <iframe
    //           width="420"
    //           height="345"
    //           src={`https://www.youtube.com/embed/${element.id.videoId}`}
    //         ></iframe>
    //         <p>Description: {element.snippet.description}</p>
    //       </div>
    //     );
    //   })}
*/}
    </div>
  );
}
export default Search;

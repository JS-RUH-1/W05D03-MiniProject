import React from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailsPage() {
  const state = useSelector((state) => {
    return {
      details: state.details.details,
    };
  });
  console.log(state.details);
  return (
    <div className="datailsPage">
      <h2>{state.details.snippet.title}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${state.details.id.videoId}`}
        title={state.details.snippet.title}
        frameborder="0"
        allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        autoplay="true"
        allowfullscreen="true"
      ></iframe>
      ;
    </div>
  );
}

export default DetailsPage;

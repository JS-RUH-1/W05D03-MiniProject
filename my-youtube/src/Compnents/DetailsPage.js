import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Style/DetailsPage.css";
function DetailsPage() {
  const state = useSelector((state) => {
    return {
      details: state.details.details,
    };
  });
  console.log(state.details);
  return (
    <div className="datailsPage">
      <h2> Have Fun :)</h2>
      <iframe
        width="966"
        height="543"
        src={`https://www.youtube.com/embed/${state.details.id.videoId}?autoplay=1`}
        title={state.details.snippet.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
      <h2 className="mt-3 Video__title">{state.details.snippet.title}</h2>
      <br />
      <div className="datailsPage__desc">
        <p>{state.details.snippet.description}</p>
      </div>
    </div>
  );
}

export default DetailsPage;

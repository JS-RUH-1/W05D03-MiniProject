import { useDispatch, useSelector } from "react-redux";
import { removeWatch } from "../reducers/watch/watch";

function Watch() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      watch: state.watch.watch,
    };
  });

  // function removeWatch(element) {
  //   dispatch(removeWatch(element));
  //   alert("Remove from Watch Later");
  // }

  return (
    <div>
      {state.watch.map((element) => {
        return (
          <div className="card">
            <h3>Title : {element.snippet.title}</h3>
            <br></br>
            <iframe
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
            <button
              onClick={() => {
                dispatch(removeWatch(element));
                alert("Removed");
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Watch;

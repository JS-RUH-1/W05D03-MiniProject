import { useSelector } from "react-redux";

function Watch() {
  const state = useSelector((state) => {
    return {
      watch: state.watch.watch,
    };
  });
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
          </div>
        );
      })}
    </div>
  );
}

export default Watch;

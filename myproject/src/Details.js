import { useParams } from "react-router-dom";
import "./App.css";

function Details({ data }) {
  const { id } = useParams();
  console.log(id)
  console.log( data)
  return (
    <div>
      
      {data
        .filter((item) => item.id.videoId === id)
        .map((item) => (
          <div>
            <br></br>
            <h3>{item.snippet.channelTitle}</h3>
            <div className="DetailsCard" key={item.id.videoId}>
              <div className="DetailsImg">
                {/* <img alt="" src={item.snippet.thumbnails.default.url}></img> */}
                <iframe width="420" height="345" src={`https://www.youtube.com/embed/${item.id.videoId}`}></iframe>
              </div>
              <div className="DetailsP">
                <p>{item.snippet.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Details;
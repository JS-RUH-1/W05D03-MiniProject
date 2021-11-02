import axios from "axios";
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card } from "react-bootstrap";

function Home() {
  const [vedios, setVedios] = useState([]);
  // const Video = () => {
  console.log("clicked");
  // console.log(vedios);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&chart=mostPopular&key=AIzaSyBPfC-b8MXBZ_DXTuQZvIl-WjmeU7Nf1lI"
      )
      .then((res) => {
        console.log(res);

        setVedios(res.data.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4>Most Popular </h4>
      <button onClick={vedios}>test</button>

      {vedios.map((element) => {
        return (
          <div className="card">
            <h3>Title : {element.snippet.title}</h3>
            <iframe
              width="420"
              height="345"
              src={`https://www.youtube.com/embed/${element.id.videoId}`}
            ></iframe>
            <p>Description: {element.snippet.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;

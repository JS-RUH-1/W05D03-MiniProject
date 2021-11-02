import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const state = useSelector((state) => {
    return {
        dark: state.dark.dark
    }
  })

  const [mostPopular, setMostPopular] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM&maxResults=12"
      )
      .then((res) => {
        setMostPopular(res.data);
      });
  }, []);

  return (
    <div>
      <div className="row  row-cols-3 gap-5">
        {mostPopular.items?.map((v) => (
          <div className={`col card ${state.dark ? "bg-dark": ""}`} style={{ width: "18rem" }}>
            <Link to={`/video/${v.id}`}>
              <img src={v.snippet.thumbnails.high.url} class="card-img-top" />
              <div class="card-body">
                <p class="card-text">{v.snippet.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import "../App.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

let history = useHistory();
  const [mostPopular, setMostPopular] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM&maxResults=8"
      )
      .then((res) => {
        setMostPopular(res.data);
      });
  }, []);

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"300px 300px 300px 300px",gap:20, justifyContent:"center",marginTop:"2%"}} >
        {mostPopular.items?.map((v) => (
            <div className="continerChield" onClick={()=>history.push(`/video/${v.id}` )}>
              <img style={{borderRadius:5}} width={300} height={300} src={v.snippet.thumbnails.high.url}  />
              <div >
                <h5 style={{textAlign:"center"}} >{v.snippet.title}</h5>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

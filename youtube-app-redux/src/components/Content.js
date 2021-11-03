import React, {useContext} from "react";
import { DataContext } from "../context/Context";
import {Link} from 'react-router-dom'



const Popular = () => {
  const data = useContext(DataContext)
  // console.log(data);


  const saveVideo = (element) => {
    localStorage.setItem("singleVideo", JSON.stringify(element))
  }

  return (
    <div className="content"> 
      <h1 className="m-5">The most Popular Vedios on YouTube now</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.popularVedies.map((ele, index) => (
          <div className="col" key={index}>
            <div className="card">
            <iframe title={ele.snippet.title} src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe>
              <div className="card-body">
                <h5 className="card-title">{ele.snippet.title}</h5>
                <Link to="singleVideo">
                  <button type="button" className="btn btn-primary" onClick={() => saveVideo(ele)}>Video Detailes</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;


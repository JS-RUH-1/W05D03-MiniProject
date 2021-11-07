import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router';
import axios from 'axios';
// import './App.css';

function Details() {

    const {videoId}=useParams();


     const [divid, setDivid] =  useState({title: ''})

    useEffect(()=>{
     axios
    .get(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyC8b31UPAFoSc-JNxWYU_L-jEqEkAgy68I`)
    .then((res) => {
        setDivid({ title: res.data.items[0].snippet.title})

    })
    .catch((err) => {
      console.log(err);
    });
      },[])



      useEffect(() => {
        console.log(divid)
     }, [divid]);


  return (
    <div >
          <h2>{divid.title}</h2>
      <iframe
        width="660"
        height="415"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={divid.title}
        frameborder="0"
        allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        autoplay="true"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Details;
import React, { useState } from "react";
import {useDispatch , useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { addVideo } from "../reduser/Vadio";




const Single = () => {
    // يحولها js

    let getData=JSON.parse(localStorage.getItem("video"))
    // console.log(getData);

    const dis = useDispatch();

    const state = useSelector((state)=>{
      return {
        vi :state.Vadios.vadios
        
      }
    })

    const addVusn = ()=>{
      dis(addVideo(getData))
      

    }

        


    return (
      <div class="card">
        <iframe
          title={getData.snippet.title}
          src={`https://www.youtube.com/embed/${getData.id.videoId}`}
        ></iframe>
        <div class="card-body">
          <h5 class="card-title">{getData.snippet.title}</h5>
          <Link to="/watchLater">
            <button  type="button" class="btn btn-danger" onClick={addVusn}>
              Wahtchleatr
            </button>
          </Link>
        </div>
      </div>
    );
}
 
export default Single;
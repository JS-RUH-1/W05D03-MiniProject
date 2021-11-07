import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { removeVideo } from "../reduser/Vadio";


const Wahtch = () => {


  const dispatch = useDispatch();

  

  const state = useSelector((state) =>{
  return {

    vadio : state.Vadios.vadios


  }
} )


console.log(state);

 return (
    <div class="card">
    {state.vadio.map((element , index )=>(
      <div>
      <iframe
title={element.snippet.title}
src={`https://www.youtube.com/embed/${element.id.videoId}`}
></iframe>

<div class="card-body">
        <h5 class="card-title"></h5>

          <button  type="button" class="btn btn-danger" onClick={()=> dispatch(removeVideo(element))}>
            Deleat Vadio 
          </button>

      </div>
      </div>

    ))}





    </div>
  );
}

export default Wahtch;
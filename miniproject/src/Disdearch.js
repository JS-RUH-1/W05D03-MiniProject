import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

function Disdearch(props){

const value = props.values;
const [arrysr, setArrysr] = useState([]);

useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyC8b31UPAFoSc-JNxWYU_L-jEqEkAgy68I

        `
      )
      .then((res) => {
          {
              console.log(res.data.items)
        setArrysr(res.data.items);
          }
        });
    },[]);
    return(
        <div className="mom">
            {arrysr.map((items)=>{
                return(
                    <div>
             <iframe  width="220" height="115" onClick={""}
            src={`https://www.youtube.com/embed/${items.id.videoId}`}>
            </iframe>
              <h4>{items.snippet.title}</h4>
              <p>{items.snippet.channelTitle}</p>
                        </div>
                )
            })} 
        </div>
    )


}

export default Disdearch;
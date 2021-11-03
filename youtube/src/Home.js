
import axios from "axios";
import { useEffect, useState } from "react";

function Home(){

    const [popularV,setPopularV] = useState([]);


    useEffect (()=> {
        axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=6&chart=mostPopular&regionCode=US&key=AIzaSyDmJS-BDawRu9576lqITIiU62d603ljwlI')
            .then(response => {
        console.log(response.data.items);
        setPopularV(response.data.items);
        });
    }, []);

    return (

        <div className= "style">
        {popularV.map((e)=> {
            return(
                <div>

              {/* <img src={e.snippet.thumbnails.medium.url}></img> */}
              <iframe title={e.snippet.title} src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
              <h3>{e.snippet.title}<br/></h3> 
              <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
              
                </div>)}
            )
        }
        </div>
        
    )
    }


    export default Home;


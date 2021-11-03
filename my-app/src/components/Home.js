import axios from "axios";
import { useEffect, useState } from "react";
import popular from '../data.json'


function Home() {
    const [popVideos, setpopVideos] = useState([])

    //  useEffect(() => {
    //       {
    //           console.log(response.data.items)
    //          setpopVideos(response.data.items)
    //      } )
    //  },[])

    return (
        <div>

            {popular.map((e, key) => {
                
                return (
                    <div key={key}>
                        <iframe title={e.snippet.title} src={`https://www.youtube.com/embed/${e.id}`}></iframe>
                        <h3>{e.snippet.title}</h3>
                        <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
                    </div>
                )
            })
            }

        </div>
    )
}
export default Home
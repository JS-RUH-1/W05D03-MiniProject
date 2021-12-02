import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Store} from './PopularList';

function Search(props) {
    console.log(props.item)
    const[result, setResult] = useState([""])
    
        // axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.item}&key=AIzaSyCbSStc9SQAlJkFPaXSZ2s_kFVLgkA6IEY`)
        // .then(res => console.log(res.data.items))
        // .catch(err => console.log(err));
        useEffect(() => {
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.item}&key=AIzaSyAovTb3cruG-cnERSAJw4t7DvPgOiobj7I`)
        .then(data => setResult(data.data.items))
        .catch(err => console.log(err));
        },[])
        
    
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-2">
                {
                    result.map((i, index)=>{
                        if(i){
                            return (
                                <div key={index} className="col">
                                    <Link to={`/Video/${i.id.videoId}`} className="text-decoration-none text-dark">
                                    <div className="card h-100" onClick={()=>{Store.dispatch({type:{
                                        id: i.id.videoId, 
                                        pub: i.snippet.publishedAt.slice(0,10),
                                        tit: i.snippet.title,
                                        ch: i.snippet.channelTitle, 
                                        des: i.snippet.description,
                                        img: i.snippet.thumbnails.medium.url}})}}>
                                        <img className="card-img-top" src={i.snippet.thumbnails.medium.url} alt={i.snippet.title}/>
                                        <div className="card-body" >
                                            <p className="card-title">{i.snippet.title}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        }
                            
                        })
                }
            </div>
        </div>
    )
}

export {Search};
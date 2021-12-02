import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import  {createStore} from 'redux';
import axios from 'axios';

function videoReducer(state = {id:""}, action) {   
   return state= action.type
}

function videoListReducer(list = {id:""}, action) {   
    return list = action.type
 }

const Store = createStore(videoReducer)
const videStore = createStore(videoListReducer)

function PopularList(props) {
    const [vids, setvids] = useState([])

    useEffect(()=>{
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAovTb3cruG-cnERSAJw4t7DvPgOiobj7I")
        .then(data => {
            setvids(data.data.items); 
            videStore.dispatch({type: data.data.items})
        })
        .catch(err => console.log(err));
    },[])
    return (
        <div className="container mt-4">
            <div className="container mx-auto mb-4" style={{maxWidth: "500px"}}>
                <form className="d-flex shadow">
                    <input type="text" className="form-control me-1" onChange={(e)=>{props.setKey(e.target.value)}}/>
                    <Link to="Search" className="btn btn-secondary">Search</Link>
                </form>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-2">
                {
                    vids.map((i, index)=>{
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
                        })
                }
            </div>
        </div>
    )
}

export {PopularList, Store, videStore};

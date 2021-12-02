import {Link} from 'react-router-dom';
import {Store} from './PopularList';
import {createStore} from 'redux';

function watchReducer(videos = [""], action){
    if(action.payload == 0){
       return videos = [...videos, action.type];  
    }else{
        return videos = action.type
    }
       
}

const wList = createStore(watchReducer);

function Video() {
    return (
        <div className="container">
            <div className="card px-0 mx-auto mt-5" style={{width: "610px"}}>
                    <div className="mx-auto pt-1">
                    <iframe  width="600" height="400" src={`https://www.youtube.com/embed/${Store.getState().id}`}></iframe>
                    </div>
                    <div className="card-body">
                        <Link to='/WatchList' className="btn btn-sm btn-secondary" 
                        onClick={() => {wList.dispatch({type:Store.getState().id, payload:0})}}>Watch later</Link>
                        <div className="card-title"></div>
                        <div className="card-text"><b>Published at: </b>{Store.getState().pub}</div>
                        <div className="card-text"><b>Channel: </b>{Store.getState().ch}</div>
                        <div className="card-text"><b>Description: </b>{Store.getState().des}</div>
                    </div>
            </div>
        </div>
    )
}

export {Video, wList};
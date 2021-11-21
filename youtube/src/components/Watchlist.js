import React from 'react';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { addToWatchList, removeFromWatchList } from "../states/watchlater/watchlater";

function Watchlist (){
    const dispatch = useDispatch();
  
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

	const state = useSelector((state) => {
		return {
			watchlater: state.watchlater.watchlater,
		};
	});

    return (
        <div class="container-fluid">
            <div class="row mt-5 justify-content-md-center">
                {
                    state.watchlater.length 
                    ? state.watchlater.map ( (element) => {return(
                        <div className="col video-grid mt-3">
                        <Link to={{
                                pathname: `/video/${element.id}`,
                                state: {
                                videoInfo: element,
                                },
                            }} 
                            className="video-grid">
                            <img src={element.snippet.thumbnails.medium.url} width={270} height={150}></img>
                            <h6 className="video-title">{element.snippet.title}</h6>
                            <small>{element.snippet.channelTitle}</small>
                            <br></br>
                            <small className="text-muted">{kFormatter(element.statistics.viewCount)} • At {element.snippet.publishedAt.substr(0,7)}</small>
                        </Link>
                        {
                            (state.watchlater.filter(e => e.id === element.id).length > 0)
                            ?<div onClick={()=>dispatch(removeFromWatchList(element.id))}><i className="bi bi-folder-minus"></i> Remove from Watchlist</div>
                            :<div onClick={()=>dispatch(addToWatchList(element.id,element))}><i className="bi bi-folder-plus"></i> Add to Watchlist</div>
                        }
                    </div>
                    )})
                    : <h2>Watch later list is empty</h2>
                }
            </div>  
        </div>
    );
}

export default Watchlist;
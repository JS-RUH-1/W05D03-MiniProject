import {useState} from 'react';
import {Store} from './PopularList';
import {wList} from './Video';
import {videStore} from './PopularList';

function WatchList(){
    let[list, setList] = useState(wList.getState()) 

    function removeVideo(id) {
        let old_list = wList.getState();
        let new_list = [];
        for(let i=0; i<old_list.length; i++){
            if(old_list[i] != id){
                new_list.push(old_list[i])
            }
        }
        wList.dispatch({type: new_list, payload:1})
        setList(wList.getState())
        console.log(new_list)
    }
    return(
        <div className="container shadow mt-5 py-3" style={{maxWidth: "700px"}}>
            {
                (videStore.getState()).map((i, index) => {
                  if(list.includes(i.id.videoId)){
                        return(
                            <div key={index} className="card ">
                            
                                <div className="row g-0 ">
                                    <div className="col-auto mb-2 px-1">
                                        <button className="btn btn-sm btn-danger" onClick={()=>{removeVideo(i.id.videoId)}}>X</button>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={i.snippet.thumbnails.medium.url} className="img-fluid rounded h-100" alt={i.snippet.title}/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body py-0">
                                            <div className="card-title"><b>{i.snippet.title}</b></div>
                                            <div className="card-text">{(i.snippet.description).slice(0,50)}...</div>
                                            <div className="card-text mt-3">{(i.snippet.publishedAt).slice(0,10)}</div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        )
                   }
                })
            }
        </div>
    )
}


export {WatchList};
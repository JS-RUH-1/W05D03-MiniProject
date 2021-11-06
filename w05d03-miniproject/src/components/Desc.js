import * as ReactBootStrap from "react-bootstrap";
import React,{  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAVideo } from '../reducers/videos/videos';
function Desc(){
  const [modal,setModal]=useState(false)

  
  const dispatch = useDispatch();
const state = useSelector((state) => {
        return {
          video: state.video.video,
          videos: state.videos.videos,
        };
      });

      
    console.log(state.video)

    let addit=(curr)=>{
      if(state.videos.every(e=>e.id!=curr.id))
      dispatch(addAVideo(curr));
      else
      setModal(true)
    }

    return (
      <div>
      {state.video.snippet==undefined?<h1>Nothing to show here</h1>:
        <div>
      <div>
      <iframe width={state.video.snippet.thumbnails.standard?.width+'px'} 
      height={state.video.snippet.thumbnails.standard?.height+'px'} 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
       id="play_iframe" src={"https://www.youtube.com/embed/"+state.video.id}></iframe>
       
      
      </div>
      <div id="video_page_details">
      <h1>{state.video.snippet.title}</h1>
      <h2>{state.video.snippet.publishedAt}</h2>
      <h4>{state.video.snippet.channelTitle}</h4>
      <h6>{state.video.snippet.description}</h6>

      <button onClick={()=>addit(state.video)}>Add to watch later</button>
      <ReactBootStrap.Modal
        size="sm"
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title id="example-modal-sizes-title-sm">
            !!
          </ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>This video is already in your watch list</ReactBootStrap.Modal.Body>
      </ReactBootStrap.Modal>
       </div>
      </div>
      }
      
      </div>);
}

export default Desc;

/*<iframe src='https://www.youtube.com/watch?v=Ks-_Mh1QhMc&' title="description"></iframe>
      <iframe src="demo_iframe.htm" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>
      <p><a href="https://www.youtube.com/watch?v=pXDx6DjNLDU" target="iframe_a">W3Schools.com</a></p>*/
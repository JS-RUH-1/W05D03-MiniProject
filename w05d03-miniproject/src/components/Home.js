
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo , clearVideo } from '../reducers/video/video';
import {Link} from 'react-router-dom';




function Home(props) {

    const popular = props.name;
    const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        video: state.video.video,
      };
    });
  
    let addit=(curr)=>{
      dispatch(addVideo(curr));
    }
  
    return (
      <div className="App">
        <header className="App-header">
        <h1 id="home_title">Now popular:</h1>
          <div id="videos">
          {popular.map((e,i)=>{
            return (
                <Link key={e.id} className="Link" onClick={()=>addit(e)} to="/Desc">
              <div id={i} className="videos_parent" onMouseOver={()=>addit(popular[i].id)}>
              <img className="video_thumbnail" src={e.snippet.thumbnails.high.url} alt="#" />
              <div>
              <h4 className="video_title" >{e.snippet.title}</h4>
              <h6 className="views" >{e.statistics.viewCount+" views"}</h6></div>
              <div className="video_stats">
              <h6 className="likes" >{e.statistics.likeCount+'👍'}</h6>
              <h6 className="dislikes" >{e.statistics.dislikeCount+'👎'}</h6>
              </div>
              
              
              
              <h6 className="video_channel_title" >{e.snippet.channelTitle}</h6>
              </div></Link>)
          })}
          
          </div>
        </header>
      </div>
    );
  }
  
  export default Home;
//<Link className="Link" onClick={()=>addit(e)} to="/Desc" >Go to video</Link>
  /*
  <div id="videos">
          <div className="videos_parent">
          <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
          <h4 className="video_title" > The title is something</h4>
          <h6 className="video_channel_title" >Youtube channel</h6>
          </div>
          <div className="videos_parent">
          <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
          <h4 className="video_title" > The title is something</h4>
          <h6 className="video_channel_title" >Youtube channel</h6>
          </div>
          <div className="videos_parent">
          <img className="video_thumbnail" src="https://i.ytimg.com/vi/rOJ1cw6mohw/default.jpg" alt="#" />
          <h4 className="video_title" > The title is something</h4>
          <h6 className="video_channel_title" >Youtube channel</h6>
          </div>
          </div>*/

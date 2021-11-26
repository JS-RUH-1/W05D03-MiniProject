import React from 'react';

import {useSelector, useDispatch } from 'react-redux';
import { remove} from './Reducers/YoutReducer';


export default function WatchLater() {

    const dispatch=useDispatch()
    const state = useSelector((state)=>{

        return{
            
            later:state.YoutReducer.yout
        }
    })



    return ( 
        <>
<h2 className='subject'>Watch Later page</h2>

<hr/>

<div className='BigBox'>

      {state.later.map((elm)=>(
          
<div className='SmallBox' key={elm.id} >

<iframe width={200} height={145} title="This is a unique title"
src={`https://www.youtube.com/embed/${elm.id.videoId}`}>
</iframe>

<small>{elm.snippet.title}</small>
 <br/>

<button className='RemoBn'> 

<img onClick={() => (dispatch(remove(elm)))}

src="https://img.icons8.com/fluency/30/000000/delete-forever.png" alt=''/>
         
</button>
</div>


      

 ))}
</div>
        </>
     );
}

 
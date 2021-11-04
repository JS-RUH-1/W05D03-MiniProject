import React, { useEffect, useState } from "react";

import axios from 'axios'
import './App.css';


import {watchLater,remove} from './Reducers/YoutReducer';
 
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
 import {useSelector, useDispatch} from 'react-redux';
 



  function Fetch (){

    const dispatch=useDispatch()

    const state =useSelector((state) => {

        return {
          WatchLater:state.YoutReducer.yout,
          count :state.YoutReducer.count,

        }
      })
    
       

    // for axios
    const [Data,setData]=useState([])

    // for redux
   const [vidoe,setVidoe]=useState([
       {
        
        name:'shahad'
       }
       
       ,{
           name:'sara'
       }
   ])
   
    
    // const FetchAPI=()=>{

    // fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAAIr9iYdLDg_MhJCvpWjZaov5Jm0bRS7I')
    //     .then((res)=> res.json())
    //     .then((json)=>{ console.log(json.items)
    //        setData(json.items)
    //     })
    //     }


        //useEffect print all function insaid the useEffect when i update the page without click the button   



// /That is for youtube 

//     useEffect(()=>{
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyA9PH9fvQgSQN3C_1zFQtDJc4joW0iHti0')

// .then((res)=>{
//     console.log(res.data)
//     setData(res.data.items)
// })

// },[])

 
    return(     

        <>
        
        <h2 className='subject'>Home page</h2>
         
        <hr/>
       
        <br/>
                    
 <div className='BigBox'>
 
{/* {vidoe.map((elm)=>(

    <div className='SmallBox' key={elm.id}> 
    
    
    <div className='Title'>
        <small className ='TitleOfVidoe'>{elm.name}</small>
     </div>

     <br/>
     <br/>

<div className="image"> */}

 {/* <WatchLaterIcon />  */}

{/* <button className='LaterBtn'>   

     <img onClick = {()=>((dispatch(watchLater(elm))) )} 

    src="https://img.icons8.com/color/15/000000/star--v1.png" alt=''/>

   </button>
           </div>

     
    </div>
))} */}
 
</div>

<div>
    <div className='BigBox'>


    {console.log(state.WatchLater)}

    {/* {state.WatchLater.map((e)=>(
        <>
        <div className='RemoBn'  > 

        <h4>{e.name}</h4>
             
         <button className='RemoveBtn'>
        <img onClick={()=>(dispatch(remove(e.id)))}
        src="https://img.icons8.com/fluency/40/000000/delete-forever.png" alt=''/>
</button>
         </div>
</>
    ))} */}


    {/* Data.items?((elm)) ....>another ways */}
{/* Display all vidoe into UI */}
        {Data.map((elm) => (
             
            <div className='SmallBox' key={elm.id}>

            {/* <Link to={`/video/${elm.id}`}> */}

        <iframe width={200} height={145} title="This is a unique title"
        src={`https://www.youtube.com/embed/${elm.id.videoId}`}>
        </iframe>
        <div> <small className='TitleOfVidoe'>{elm.snippet.title}</small></div>
             <br/>
             <div className='image'>
            {/* <button  onClick = {()=>((dispatch(watchLater(elm))) )}>Watch Later</button> */}
            <button className='LaterBtn' > 
            <img   onClick = {()=>((dispatch(watchLater(elm))) )}
               src="https://img.icons8.com/color/30/000000/star--v1.png" alt=''/>
    </button>
            </div>


            </div>
            
        ))}

         
        </div>
     
</div>
        </>
    )
}
export default Fetch;
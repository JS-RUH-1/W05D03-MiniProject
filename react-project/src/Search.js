import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {watchLater} from './Reducers/YoutReducer';

import {useSelector, useDispatch} from 'react-redux';



export default function Search() {

    //useState
    const [addNew, setAddNew]=useState([])
    const dispatch=useDispatch()
    const state =useSelector((state) => {

        return {
          WatchLater:state.YoutReducer.yout,
          count :state.YoutReducer.count,

        }
      })

    const[name,setName]=useState()

     const [search,setSearch]=useState([
         {
             title:'shahad'
         },
         {
            title:'sara'
         },
         {
            title:"shahad"  
         },{
             title:'nora'
         }
     ])
     
    useEffect(()=>{

 axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${name}&key=AIzaSyCT4lpA1KP6QOseZKHSNT45zLx89ke5tII`)
 
.then((res)=>{
    console.log(res.data)
    setAddNew(res.data.items)
 })

   },[name])





// function AddNewForm(props) {

//     // const[name,setName]=useState()


//     const handelSubmit=(event)=>{
//         event.preventDefault();
        
//         props.setAddNew(props =>props.concat({name:name}))
        
//         alert(`${name}`)

//             }


//     return ( 
//     <>

// <h1 className='subject'>Youtube website</h1>
            
            
//             <form className='searchForm' onSubmit={handelSubmit}>  

//    <input className='searchInput'
//     type='search'
//     value={name}
//     placeholder ='Search'
//     onChange={e => {setName(e.target.value)}}></input>


//    <input className='searchBtn' type='submit'></input>
            
//             </form> 
    
//     </> );
// }




    return ( 

        <> 
<div className='header'> 
<h1 className='subject'> Search for Video</h1>
            
            
            <form className='searchForm' >  

   <input className='searchInput'
    type='search'
    value={name}
    placeholder ='Search'
    onChange={e => {setName(e.target.value)}}></input>


   <input className='searchBtn' type='submit'></input>
            
            </form> 
    
    </div>
    
<hr/>




<div className='BigBox'>



{/* {addNew.map(FilName=>
(
    <div className='SmallBox'>
    <iframe width={150} height={145} title="This is a unique title"
        src={`https://www.youtube.com/embed/${FilName.id.videoId}`}>
        </iframe> 

    <li>{FilName.snippet.title}</li>
    </div>

    ))} */}



</div>

 

    
 {/* display on UI */}

       {/* {search.filter(filterTitle => filterTitle.title === name)

       .map((elm)=>{
            return(
                <>
                <h3>{elm.title}</h3>
</>
            )}
       )}  */}
 
       <div className='BigBox'>
       {addNew.map((elm)=>{
         
           console.log(elm.snippet.title)
            
            return(
                <>
                <div className='SmallBox'> 

        <iframe width={150} height={145} title="This is a unique title"
        src={`https://www.youtube.com/embed/${elm.id.videoId}`}>
        </iframe>

                <p>{elm.snippet.title}</p>

                <div className="image">
     <img  onClick = {()=>((dispatch(watchLater(elm))) )}  
           src="https://img.icons8.com/color/30/000000/star--v1.png" alt=''/>
             
           </div>
               {/* <button> <small>watch later</small></button> */}
                </div>
                </> 
     )
    }
      
)} 
</div>
        </>
     );
}

 //Functions 


// function AddNewForm(props) {

//     const[name,setName]=useState()


//     const handelSubmit=(event)=>{
//         event.preventDefault();
        
//         props.setAddNew(props =>props.concat({name:name}))
        
//         alert(`${name}`)

//             }


//     return ( 
//     <>

// <h1 className='subject'>Youtube website</h1>
            
            
//             <form className='searchForm' onSubmit={handelSubmit}>  

//    <input className='searchInput'
//     type='search'
//     value={name}
//     placeholder ='Search'
//     onChange={e => {setName(e.target.value)}}></input>


//    <input className='searchBtn' type='submit'></input>
            
//             </form> 
    
//     </> );
// }

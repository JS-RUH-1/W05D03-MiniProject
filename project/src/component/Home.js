import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/context';



function Home (){

    const data = useContext(DataContext)
    console.log(data.popularV);


    const saveVasio = (e) =>
    {

        // يحولها json obj
        localStorage.setItem("video" , JSON.stringify(e))



    }


    return (

      <div class="card-group">
        {data.popularV.map((e) => (
          <div className="card">
            <iframe
              title={e.snippet.title}
              src={`https://www.youtube.com/embed/${e.id.videoId}`}
            ></iframe>
            <div class="card-body">
              <h5 class="card-title">{e.snippet.title}</h5>
             <Link to="/singleComponent"> <button type="button" class="btn btn-danger" onClick={()=>saveVasio(e)}>infromation</button></Link>
             
            </div>
          </div>
        
        ))
        
        }
      </div>
    );
    
    }
export default Home 
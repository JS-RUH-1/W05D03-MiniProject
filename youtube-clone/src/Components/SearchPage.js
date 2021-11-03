import React from 'react';
import "./Searchstyle.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoRow from './VideoRow';
import { useParams } from 'react-router';
function SearchPage(props) {
 const {searchTerm}=useParams();
    return ( 
<div className="searchPage">
<div className="searchPage__filter">
    <TuneOutlinedIcon/>  
    <h2>FILTER</h2> 
</div>
<hr/>

<VideoRow valueserach={searchTerm}/>
</div>

     );
}

export default SearchPage;
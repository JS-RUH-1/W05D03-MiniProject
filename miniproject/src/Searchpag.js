import React from "react";
import './searchpag.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import { useSelector } from "react-redux";
import './App.css';
import Disdearch from './Disdearch';
import { useParams } from 'react-router';

function Searchpag(){
    const {searchTerm}=useParams();
    
    return(
        <div className="Searchpag">
            <h4>Searchpag</h4>
            <div className="Search-filter">
            <TuneOutlinedIcon /> 
            <h2>filter</h2>
            </div>
            <hr />
            <Disdearch values={searchTerm} />

        </div>
    )
}
 
export default Searchpag
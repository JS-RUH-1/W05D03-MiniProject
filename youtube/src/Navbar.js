import * as Bootstrap from 'react-bootstrap';
import './App.css';
import {saveWord} from "./reducers/searchReducer";
import { BrowserRouter , Switch, Route, Link, useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";


function Navbar(){
    const state = useSelector((store)=> {


        return {
            searchW: store.searches.searchWord,
        }
    })

    const dispatch = useDispatch();
    let history = useHistory();
    function handelClick (){
        history.push(`/Search/${state.searchW}`) ;
    }


    return(
        <div>

                <Bootstrap.Navbar bg="light" expand="lg">
                <Bootstrap.Container fluid>
                <Bootstrap.Navbar.Brand><Link exact to='/'>YouTube</Link></Bootstrap.Navbar.Brand>
                <Bootstrap.Navbar.Brand><Link to='/Search'>Search</Link></Bootstrap.Navbar.Brand>
                    <Bootstrap.Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Bootstrap.Form className="d-flex">
                        <Bootstrap.FormControl onChange={(e)=> {dispatch(saveWord(e.target.value))}} type="search" placeholder="Search" className="me-4" aria-label="Search"/>
                        <Bootstrap.Button onClick={()=>handelClick()} variant="outline-success">Search</Bootstrap.Button>
                    </Bootstrap.Form>
                    </Bootstrap.Nav>
                </Bootstrap.Container>
                </Bootstrap.Navbar>

        

        </div>
    )
}

export default Navbar;
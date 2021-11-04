import React from 'react'
import './App.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import {Nav, Navbar,Container, Form,Button,FormControl} from 'react-bootstrap';
import {Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Watch from './Watch'
import Search from './Search';
import { useDispatch, useSelector } from "react-redux";
function Header(){
    return(
        <div className="header">
           <Navbar bg="light" expand="lg">
  <Container fluid>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" height="60px" width="120px"/>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand> <Link exact to="/">Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><Link exact to="/Watch">Watch Later</Link></Nav.Link>
      <Nav.Link ><Link  to ="/Search">Search</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </Container>
</Navbar>
        </div>
        
    )
}
export default Header;
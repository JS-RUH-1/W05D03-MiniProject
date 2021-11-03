import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { saveInput } from '../reducers/youtube/youtube'
import React from "react"
import Home from "./Home"
import Search from './Search'
import {useState, useEffect} from 'react'
import { arrOfRes } from "../reducers/youtube/youtube"
import axios from "axios"

function NavBar() {

const [word,setWord]=useState()

const addWord = () =>{
  saveInput(word)
}

const dispatch = useDispatch()

useEffect(() => {
  axios
  .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${word}&key=AIzaSyB-HhjjQHthG7wDHwLpHxT13f6RMOIhpCE`)
  .then((res) => {
      console.log(res.data.items)
      dispatch(arrOfRes(res.data.items))
  })
  .catch((err) =>{
      console.log(err)
  })},[word]);

  return (
    <Router>
      <div>

        <Navbar bg="light" expand="lg">
          <Container fluid>
          <Navbar.Brand ><Link exact to="/">Youtube</Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Form className="d-flex">
                <FormControl
                  onChange={(e) => {setWord(e.target.value)}}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              <Navbar ><Link to="/Search"><Button variant="outline-success" onClick={addWord} >Search</Button></Link></Navbar>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/Search">
            <Search/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default NavBar

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dark } from "../reducers/darkmode";

export default function Navbar() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            dark: state.dark.dark
        }
    })
    const setDarkMode = () => {
        console.log(state.dark)
        dispatch(dark());
    }
    return <nav class={`navbar navbar-expand-lg ${state.dark ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
    <div class="container">
      <a class="navbar-brand" href="#">YouTube</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/later">Watch Later</Link>
          </li>

        </ul>
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => setDarkMode(!state.dark)}>{!state.dark ? "Dark mode" : "White mode"} </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
}
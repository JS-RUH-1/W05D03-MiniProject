import "./NavBar-module.css";
import logo from "../image/YouTubeLogo.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { ImYoutube2 } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
import { makeSearch } from "../data/searchData";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../data/ui";

// import { addVideos } from "../data/videos";
function NavBar() {
  const [searchVal, setSearchVal] = useState();
  const allData = useSelector((allData) => {
    return {
      myStyle: allData.ui.colorsObject,
    };
  });
  const dispatch = useDispatch();
  function axiosData() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
          searchVal +
          "&key=AIzaSyBbfY3O287NtkwIYZ2hGEtI9MTGHJ_SyBc"
      )
      .then((data) => {
        console.log(data.data.items);
        dispatch(makeSearch(data.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      className="NavBar"
      style={{
        backgroundColor: allData.myStyle.navBar_background,
      }}
    >
      <div className="flex-nav-left">
        <Link className="myLinks" to="/">
          <ImYoutube2 size="60px" color="rgb(221, 0, 0)" />
        </Link>
      </div>

      <div
        className="flex-nav-right"
        style={{
          borderBottomColor: allData.myStyle.font_Grey,
        }}
      >
        <div
          className="search"
          style={{
            borderColor: allData.myStyle.font_Grey,
          }}
        >
          <input
            style={{
              backgroundColor: allData.myStyle.app_background,
              color: allData.myStyle.font_Color,
            }}
            className="searchVal"
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          ></input>
          <button
            style={{
              backgroundColor: allData.myStyle.font_Grey,
            }}
            onClick={axiosData}
            type="submit"
            className="searchBtn"
          >
            <Link to="/search">
              <BsSearch />
            </Link>
          </button>
        </div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "0px",
            marginLeft: "25px",
          }}
          onClick={() => {
            dispatch(changeMode());
          }}
        >
          {" "}
          <CgDarkMode size="30px" color={allData.myStyle.font_Color} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;

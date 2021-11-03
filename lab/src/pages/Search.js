import "../components/VidCard-module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../data/watchLater";
import { addTemp } from "../data/temp";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import calcTime from "../components/calcTime";
function Search() {
  const dispatch = useDispatch();
  const allData = useSelector((allData) => {
    return {
      Videos: allData.Videos.array,
      WatchLater: allData.watchLater.array,
      temp: allData.temp.temp,
      searchArray: allData.searchData.arrSearch,
      myStyle: allData.ui.colorsObject,
    };
  });
  console.log(allData.searchArray);
  return (
    <div className="allCards">
      {allData.searchArray.map((e) => {
        return (
          <div className="cardThumb">
            <div
              onClick={() => {
                dispatch(addTemp(e));
              }}
            >
              <div class="container1">
                <img src={e.snippet.thumbnails.medium.url} alt="" />
                <Link to="/Details" className="title">
                  <div class="overlay">
                    <FaYoutube color="white" size="30%" />
                  </div>
                </Link>
              </div>{" "}
            </div>

            <div className="info">
              <div className="data">
                <button
                  className="titleBtn"
                  onClick={() => {
                    dispatch(addTemp(e));
                  }}
                >
                  <Link
                    to="/Details"
                    className="title"
                    style={{ color: allData.myStyle.font_Color }}
                  >
                    {e.snippet.title}
                  </Link>
                </button>

                <div className="channelName">{e.snippet.channelTitle}</div>
                <div className="time">{calcTime(e.snippet.publishTime)}</div>
              </div>
              <div className="watchLater">
                <button
                  className="watchLaterBtn"
                  onClick={() => {
                    dispatch(addToList(e));
                  }}
                >
                  {" "}
                  <MdOutlineWatchLater color="white" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;

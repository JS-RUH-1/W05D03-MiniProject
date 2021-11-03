import "./WatchedLater-module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromList } from "../data/watchLater";
import { Link } from "react-router-dom";
import { addTemp } from "../data/temp";
import { FaYoutube } from "react-icons/fa";
import calcTime from "../components/calcTime";
import { MdDeleteForever } from "react-icons/md";

function WatchedLater() {
  const dispatch = useDispatch();

  const allData = useSelector((allData) => {
    return {
      Videos: allData.Videos.array,
      watchLater: allData.watchLater.array,
      myStyle: allData.ui.colorsObject,
    };
  });

  return (
    <div>
      <div className="allCards">
        {" "}
        {allData.watchLater.map((e) => {
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
                    className="watchLater_remove_Btn"
                    onClick={() => {
                      dispatch(removeFromList(e));
                    }}
                  >
                    {" "}
                    <MdDeleteForever color="white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchedLater;

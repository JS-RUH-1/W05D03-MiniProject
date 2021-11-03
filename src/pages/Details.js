import "./Details-module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTemp } from "../data/temp";
import {  useDispatch } from "react-redux";
import { RiShareForwardLine } from "react-icons/ri";
function Details() {
  const dispatch = useDispatch();
  const allData = useSelector((allData) => {
    return {
      Videos: allData.Videos.array,
      WatchLater: allData.watchLater.array,
      temp: allData.temp.temp,
      myStyle: allData.ui.colorsObject,
    };
  });
  function formateDate(d) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date(d);
    let formatted_date =
      months[date.getMonth()] + " " + date.getDate() + "," + date.getFullYear();
    return formatted_date;
  }
  console.log(allData.temp);
  return (
    <div className="detailsPage">
      <div className="leftSide">
        <iframe
          width="100%"
          height="415"
          src={
            "https://www.youtube.com/embed/" +
            allData.temp.id.videoId +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
        <div className="videoInfo">
          <h1 style={{ color: allData.myStyle.font_Color }}>
            {allData.temp.snippet.title}
          </h1>{" "}
          <div className="d-flex">
            <div
              className="infoDate"
              style={{ color: allData.myStyle.font_Color }}
            >
              {formateDate(allData.temp.snippet.publishTime)}
            </div>
            <div className="infoShare">
              <button>
                {" "}
                SHARE <RiShareForwardLine />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ color: allData.myStyle.font_Color }}
          className="description"
        >
          <h4> Description</h4>
          <p>{allData.temp.snippet.description}</p>
        </div>
      </div>
      <div className="rightSide">
        {allData.Videos.map((e) => {
          return (
            <div className="vidCard_details">
              <img src={e.snippet.thumbnails.medium.url} alt="" />
              <h6
                onClick={() => {
                  dispatch(addTemp(e));
                }}
              >
                <Link
                  style={{
                    color: allData.myStyle.font_Color,
                  }}
                  to="/Details"
                  className="title"
                >
                  {e.snippet.title}
                </Link>
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// <iframe width="560" height="315" src="https://www.youtube.com/embed/wizKE002hj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
export default Details;

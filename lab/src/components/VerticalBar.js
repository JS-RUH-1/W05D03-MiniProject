import "./VerticalBar-module.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
function VerticalBar() {
  const allData = useSelector((allData) => {
    return {
      myStyle: allData.ui.colorsObject,
    };
  });
  return (
    <div
      className="VerticalBar"
      style={{
        backgroundColor: allData.myStyle.navBar_background,
      }}
    >
      <Link
        className="VerticalBar_Link"
        to="/"
        style={{ color: allData.myStyle.font_Color }}
      >
        <AiFillHome className="link_Icon" /> Home
      </Link>

      <Link
        className="VerticalBar_Link"
        to="/watchedLater"
        style={{ color: allData.myStyle.font_Color }}
      >
        <MdOutlineWatchLater className="link_Icon" />
        Watch later
      </Link>
    </div>
  );
}

export default VerticalBar;

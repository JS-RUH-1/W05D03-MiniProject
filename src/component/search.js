import axios from "axios";
import _ from "lodash";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [inputSearch, setinputSearch] = useState("");
  const [results, setResults] = useState([]);

  const clearSearch = () => {
    setinputSearch("");
    setResults([]);
  };
  const search = (value) => {
    setinputSearch(value);
    searchFromYouTube(value);
  };
  const searchFromYouTube = _.debounce((value) => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&key=AIzaSyAfMOsMbcN-coXJABWbYRwK5lf_lJDHNRc`
      )
      .then((res) => {
        setResults(res.data.items);
      });
  }, 500);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 50,
        }}
      >
        <input
          style={{
            width: "80%",
            height: 40,
            borderRadius: 5,
            borderColor: "black",
            textIndent: 30,
            fontSize: 16,
          }}
          value={inputSearch}
          onChange={(e) => search(e.target.value)}
          type="text"
          placeholder="Search for a video by name "
        />
      </div>
     <div style={{overflow:'scroll',height:200}}>
      {inputSearch != "" ? (
        <ul>
          {results.map((item) => (
            <li
              style={{
                listStyleType: "none",
                borderRadius: 5,
                width:"90%",
                padding: 5,
              }}
            >
              <Link
                onClick={() => clearSearch()}
                to={`/video/${item.id.videoId}`}
              >
                <img src={item.snippet.thumbnails.high.url} width="50px" />{" "}
                {item.snippet.title}
              </Link>
              <hr/>
            </li>
            
            
          ))}
        </ul>
      ) : (
        ""
      )}
      </div>
    </div>
  );
}
export default Search;

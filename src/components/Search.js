import axios from "axios";
import _ from "lodash";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
    const [ytSearch, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const searchFromYouTube = _.debounce((value) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyAYCdcNYe6mYsHOj5oUH1TeJUY7NWa84EM`).then((res) => {
            setResults(res.data.items);
        })
    }, 500);

    const search = (value) => {
        setSearch(value);
        searchFromYouTube(value); // i have used debounce to reduce requests 
    }
    const clearSearch = () => {
        setSearch("");
        setResults([]);
    }

    return <div className="mb-3">

<input class="form-control form-control-lg" value={ytSearch} onChange={(e) => search(e.target.value)} type="text" placeholder="Search for video" aria-label=".form-control-lg example" />

    {results.length ?   <ul class="dropdown-menu show">
        {results.map(item => <li>
            <Link class="dropdown-item" onClick={() => clearSearch()} to={`/video/${item.id.videoId}`}><img src={item.snippet.thumbnails.high.url} width="50px" /> {item.snippet.title}</Link>
            </li>
)}
  </ul>
  : ""}


    </div>
}
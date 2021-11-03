import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { watchLater } from "../reducers/watch_later";

export default function WatchLater() {
  const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            watchLater: state.watchLater.watchLater
        }
    })
    return <div>

{state.watchLater.length ? state.watchLater?.map((v) => (
          <div className={`col card ${state.dark ? "bg-dark": ""}`} style={{ width: "18rem" }}>
            <Link to={`/video/${v.id}`}>
              <img src={v.snippet.thumbnails.high.url} class="card-img-top" />
              <div class="card-body">
                <p class="card-text">{v.snippet.title}</p>
              </div>
            </Link>
            <button className="btn btn-danger" onClick={() => dispatch(watchLater.remove(v.id))}>Remove from watch later</button>
          </div>
        )) : <h3 className="mt-5">No videos in the watch later, please add one.</h3>}

    </div>
}
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function WatchLater() {
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
          </div>
        )) : <h3 className="mt-5">No videos in the watch later, please add one.</h3>}

    </div>
}
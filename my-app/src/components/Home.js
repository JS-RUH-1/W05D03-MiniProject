
import popular from '../data.json'
import { useDispatch} from "react-redux"
import addWatchlater from "../reducers/watchlater/watchlater"




function Home() {
   
    const dispatch = useDispatch()

    return (
        <div>

            {popular.map((e, key) => {
                
                return (
                    <div key={key}>
                        <iframe title={e.snippet.title} src={`https://www.youtube.com/embed/${e.id}`}></iframe>
                        <h3>{e.snippet.title}</h3>
                        <p>{e.snippet.channelTitle} . {e.snippet.publishedAt}</p>
                        <button onClick={dispatch(addWatchlater(e))}>add to watchlater</button>
                    </div>
                )
            })
            }

        </div>
    )
}
export default Home
import { useDispatch, useSelector } from "react-redux"
import addWatchlater from "../reducers/watchlater/watchlater"


export default function Search() {

    const dispatch = useDispatch()

    const state = useSelector((state) => {
        console.log(state)
        return {
            inputApp: state.youtube.input,
            arrApp: state.youtube.arr
        }
    })

    console.log(state.arrApp)

    return (
        <div>
            {console.log(state.arrApp)}
            {state.arrApp.map((e, key) => {
                return (

                    <div key={key}>
                        {e.id.videoId}
                        <p> {e.snippet.title} </p>
                        <button onClick={dispatch(addWatchlater(e))}>add to watchlater</button>
                    </div>
                )
            })
            }


        </div>
    )
}
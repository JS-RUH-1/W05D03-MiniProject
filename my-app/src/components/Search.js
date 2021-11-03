import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { arrOfRes } from "../reducers/youtube/youtube"
import axios from "axios"

export default function Search() {

    // const dispatch = useDispatch()

    const state = useSelector((state) => {
        console.log(state)
        return {
            inputApp: state.youtube.input,
            arrApp: state.youtube.arr
        }
    })

    // useEffect(() => {
    //     axios
    //     .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${state.inputApp}&key=AIzaSyAGGG83JHOhisTKGWwYsb85tSTvkq-jHyM`)
    //     .then((res) => {
    //         console.log(res.data.items)
    //         dispatch(arrOfRes(res.data.items))
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })},[state.inputApp]);

    console.log(state.arrApp)

    return (
        <div>
            {console.log(state.arrApp)}


            {state.arrApp.map((e, key) => {
                return (
                    <div key={key}>
                        {e.id.videoId}

                        <p>
                            {e.snippet.title}
                        </p>
                    </div>
                )
            })
            }


        </div>
    )
}
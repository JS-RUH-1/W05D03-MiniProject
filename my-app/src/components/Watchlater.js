import watchlater from '../reducers/watchlater/watchlater'
import { useDispatch, useSelector } from "react-redux"

const watchlater = () => {

    const state = useSelector((store) => {
        return {
           wLater: store.watchlater.watchlater
        }

    })

}

export default watchlater
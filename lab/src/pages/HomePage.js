import { useEffect } from "react";
import axios from "axios";
import { addVideos } from "../data/videos";
import { useDispatch } from "react-redux";
import VidCard from "../components/VidCard";

//  YOUTUBE KYE API:  AIzaSyDogOj1c657i8SlPLL86Ar0DjKTcer627U
//  YOUTUBE KYE API:  AIzaSyC7HGHC32cr7MU1z-f6bitnPCNjlcmaocQ
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&chart=mostPopular&key=AIzaSyBbfY3O287NtkwIYZ2hGEtI9MTGHJ_SyBc"
      )
      .then((send) => {
        console.log(send.data);
        dispatch(addVideos(send.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <VidCard />
    </div>
  );
}

export default HomePage;

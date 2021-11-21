import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { addVideo } from './reducers/whatchLater/whatchLater'
import { useParams } from 'react-router-dom'

export default function Content() {
    const { id } = useParams();
    const [display, setDisplay] = React.useState({description:'', title: '', channelTitle: ''})
    const [whatchLater, setWhatchLater] = React.useState({})
    const [show, setShow] = React.useState(true)

    const dispatch = useDispatch();
    const APIKEY = 'AIzaSyBHrvObxnzBUWoXsVNKH0DrEC1msazCcEg'


        //   React.useEffect(() => {
        //      console.log(id)
        //   }, [id]);
        

      React.useEffect(() => {
        axios
          .get(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${APIKEY}`)
          .then((res) => {
            setDisplay({
                description: res.data.items[0].snippet.description,
                title: res.data.items[0].snippet.title,
                channelTitle: res.data.items[0].snippet.channelTitle,
            });
            setWhatchLater(res.data.items[0])
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);


    return (
        <div>
            <div className="clip-content">
            <iframe width="950" height='550'  
            src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
            {/* <img width="950" height='600'  src={display.snippet.thumbnails.default.url}/> */}
            <div className='section'>
                <div className='actions'>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width:'24px', height: '24px'}}><g><path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"></path></g></svg>
                    <span onClick={()=> dispatch(addVideo(whatchLater))}>حفظ</span>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width:'24px', height: '24px'}}><g><path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path></g></svg>
                    <span>مشاركة</span>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width: '24px', height: '24px', transform: 'scale(-1, 1)', transformOrigin: 'center center'}}><g mirror-in-rtl="" ><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path></g></svg>
                    <span className='like'>14</span>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width:'24px', height: '24px'}}><g ><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" ></path></g></svg>
                    <span className='like'>14</span>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width:'24px', height: '24px'}}><g ><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" ></path></g></svg>
                </div>
                <div>
                    <h3>{display.title}</h3>
                    <p>123,648 مشاهدة16‏/09‏/2016</p>
                </div>
            </div>
            <div className='section description'>
               <div className='channel'>
                      <div style={{display: 'flex'}}> 
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width:'25px', height: '25px'}}><g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" ></path></g></svg>
                            <div className='subscribe'>مشترك</div>
                      </div>
                      <div className='channel-info'>
                          <div>
                             <h5>{display.channelTitle}</h5> 
                             <span>٣٢ ألف مشترك</span> 
                          </div>
                          <img src={'https://yt3.ggpht.com/ytc/AKedOLTM6bGgJWtayEJrZHApYyJSaBqWLkMnXixAVvc85Q=s176-c-k-c0x00ffffff-no-rj'}/>
                      </div>
                </div>
                <p  className={show ?  'hide': null }>{display.description}</p>
               <span id='show' onClick={()=> setShow(!show)}> {show ?  'عرض المزيد': 'عرض محتوى أقل' } </span>
            </div>
            </div>
        </div>
    )
}

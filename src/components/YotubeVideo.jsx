import React,{useState} from 'react';
import ReactPlayer from 'react-player';

// image for the speaker used in button
import audio from '../assets/audio.png';

const YotubeVideo = ({url}) => {
  
  //  below state is use to set the mute and umnute of the video by default it is unmute as state is false if you click the below button in the component it will reverse the state value make in mute /unmute
   const [mute,setMute] = useState(false);


  return (
    <div>
      {/* react player package used to create a player */}
      <ReactPlayer url={url}  width={"100%"} height={"500px"} playing={true} muted={mute ? mute : mute}/>

      {/*  button to change the state value for mute */}
      <button onClick={() => setMute(!mute)} id='mute-video'><img src={audio} alt="" />  {mute ? <div className="muted"></div> : ""}  </button>
    </div>
  )
}

export default YotubeVideo;
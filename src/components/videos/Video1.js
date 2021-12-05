import ReactPlayer from 'react-player';
import Video_Regeneratur from "../videos/geah_video_vitC.mp4"
import React from "react";

function Video2() {
  return (
<>
<div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url= {Video_Regeneratur}
            type='video/mp4'
            width='100%'
            height='100%'
            controls = {true}
            title="regeneratur 2"
            />
        </div>
</>
  );
}
export default Video2;
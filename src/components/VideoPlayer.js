import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ( { url } ) => {
  let style = '';

  let f = url.indexOf('facebook');

  if( f < 0 ){
    style = "player-wrapper mb-2"
  } else {
    style = "player-wrapper-facebook mb-2"
  }

  return(
    <div className={ style }>
      <ReactPlayer
        className='react-player'
        controls
        url={ url }
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default VideoPlayer;
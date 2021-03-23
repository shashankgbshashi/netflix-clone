import React from 'react'
import Youtube from "react-youtube"

const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

export default function YoutubeCom({trailer}) {
    //console.log(trailer)
    return (
        <div>
            {trailer && <Youtube videoId={trailer} opts={opts}/>}
            {/* {trailer && <h1>hello</h1>} */}
        </div>
    )
}

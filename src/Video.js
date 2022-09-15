import React from 'react'
import YouTube from 'react-youtube'

function Video({id}) {
  return (
    <div>
      <YouTube  videoId={id} />
    </div>
  )
}

export default Video

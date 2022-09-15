import { Avatar } from '@material-ui/core'
import './VideoCard.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function VideoCard({image,title,channelImg,channel,views,publishedAt,id}) {

  const nav = useNavigate();

  //const ref = useRef(null)

  // const handleScroll = (ref) => {
  //   window.scrollTo({
  //     top: ref.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  

  const handleClick = () =>{
    nav(`/details/${id}`)
    // handleScroll(ref.current);
  }

  return (
    <div className="videoCard">
      {/* <Link to={`/details/${id}`}> */}
      <img className='videoThumbnail' src={image} alt="" onClick={handleClick} style={{cursor:"pointer"}}/>
      {/* </Link> */}
        
        <div className="videoCardInfo">
          <Avatar className="videoAvatar" src={channelImg} alt={channel} />
            
            <div className="videoText">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} views • Published on : {publishedAt}
                </p> 
            </div>
        </div>
    </div>
  )
}

export default VideoCard

import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ThumbUp,ThumbDown,Reply,PlaylistAdd } from '@material-ui/icons'


const useStyles = makeStyles({
    videoInfo:{
        display:"flex",
        flexDirection:"column",
        marginTop:"20px",
        width:"700px",
        '& h4':{
            paddingBottom:"10px"
        },
        '& p':{
            paddingBottom:"10px",   
        }
    },
    info:{
        display:"flex",
        flexDirection:"row",
        paddingBottom:"10px",
        // paddingTop:"10px",  
       

    },
    videoIcons:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center !important",
        justifyContent:"center",
        //marginLeft:"40px",
        // paddingTop:"10px",
        '& p' : {
            paddingLeft:"50px"
        }

        
    },
    channelInfo:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingBottom:"10px",
        '& h3':{
            paddingLeft:"20px"
        }
    },
    channelImg:{
        width:"60px",
        height:"60px",
        borderRadius : "1",
        paddingBottom:"10px",
    },
    description :  {
        color : 'grey',
        fontSize : "15px",
        textOverflow:"ellipsis",
        paddingBottom:"10px",
        '& p':{
            font : "Roboto,Arial,sans-serif"
        }
    }
})

function VideoInfo({title,description,publishedDate,channelTitle,channelImage,viewCount,likeCount,dislikeCount,subs}) {
    const classes = useStyles()
  return (
        <div className={classes.videoInfo} >
        <div className={classes.channelInfo}>
            <img data-testid="videoinfo-img" className={classes.channelImg} src={channelImage} alt={channelTitle} />
            <h3>{channelTitle}</h3>
        </div>
      
      <h4>{title}</h4>
      <p>{viewCount} views • {publishedDate}</p>
      <div className={classes.info}>
        <div className={classes.videoIcons}>
            <ThumbUp /> 
            <p style={{paddingLeft:"5px"}}>{likeCount} </p>
        </div>
        <div className={classes.videoIcons}>
            <ThumbDown style={{paddingLeft:"50px"}}/>
            <p>{dislikeCount ? dislikeCount : "0"} </p>
        </div>
        <div className={classes.videoIcons}>
            <Reply style={{paddingLeft:"50px"}}/>
            <p>SHARE</p>
        </div>
        <div className={classes.videoIcons}>
            <PlaylistAdd style={{paddingLeft:"50px"}}/>
            <p>SAVE</p>
        </div>

      </div>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default VideoInfo

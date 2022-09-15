import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Video from './Video';
import { CircularProgress } from '@material-ui/core';
import VideoInfo from './VideoInfo';
import Suggestions from './Suggestions';

function VideoPlayer() {

    const {id} = useParams();

    const [videoInfo, setVideoInfo] = useState({
        title:'',
        description:'',
        publishedDate:'',
        channelTitle:'',
        channelImage:'',
        viewCount:'',
        likeCount:'',
        dislikeCount:'',
        subs:''});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`)
          .then(response => {
            if(response.data.items[0]){
                setIsLoading(false)
            }
            createVideoInfo(response.data.items[0]);
          })
          .catch(error => {
              console.log(error);
          })
    }, [id])

    async function createVideoInfo (video){
        const snippet = video.snippet;
        const stats = video.statistics;
        const channelId =  snippet.channelId;

        const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`)
        // console.log("*****",res);

        const channelImage = res.data.items[0].snippet.thumbnails.medium.url;
        const subs = res.data.items[0].statistics.subscriberCount;
        const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {  day : 'numeric',month : 'short', year : 'numeric'});
        const title = snippet.title;
        const description = snippet.description;
        const channelTitle = snippet.channelTitle;
        const viewCount = stats.viewCount;
        const likeCount = stats.likeCount;
        const dislikeCount = stats.dislikeCount;

        setVideoInfo({
            title:title,
            description:description,
            publishedDate:publishedDate,
            channelTitle:channelTitle,
            channelImage:channelImage,
            viewCount:viewCount,
            likeCount:likeCount,
            dislikeCount:dislikeCount,
            subs:subs
        });
        console.log("#######",videoInfo);
        // setIsLoading(false);
    }

    return(
        <div className='player'>
            <div className='video-player'>
            {isLoading ? <CircularProgress color='secondary'/> : <Video id={id} /> } 
            <VideoInfo 
            title={videoInfo.title}
            description={videoInfo.description}
            viewCount={videoInfo.viewCount}
            publishedDate={videoInfo.publishedDate}
            likeCount={videoInfo.likeCount}
            dislikeCount={videoInfo.dislikeCount}
            channelTitle={videoInfo.channelTitle}
            channelImage={videoInfo.channelImage}
            subs={videoInfo.subs}

            />

        </div>
        <div className='suggestions'>
            <Suggestions />
        </div>
        </div>
    )
}

export default VideoPlayer

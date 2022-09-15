import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import VideoCard from './VideoCard'

function Suggestions() {
    const[suggestions,setSuggestions] = useState([])

    useEffect(()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`)
        .then(response => {
            setSuggestions(response.data.items)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

  return (
    <div>
        {suggestions ? suggestions.map((s)=>(
             <VideoCard 
             image={s.snippet.thumbnails.medium.url}
             channelImg={s.snippet.thumbnails.medium.url}
             title={s.snippet.title}
             channel={s.snippet.channelTitle}
             views="200"
             publishedAt={s.snippet.publishedAt}
             id={s.id}
             />
        )):null}
    </div>
  )
}

export default Suggestions

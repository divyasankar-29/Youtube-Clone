import React, { useState,useEffect } from 'react'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// const useStyles = makeStyles({
//     search :  {
//         flex : "0.8",
//         background : "#f9f9f9",
//         padding : "20px 20px",
//         '& hr' : {
//             height: "1px",
//             border: "0",
//             backgroundColor: "lightgray",
//             marginTop: "10px",
//             marginBottom: "10px",
//           }
          
//     },
// })

function SearchVideos() {

    //const classes = useStyles()

    const {query = 'trending'} = useParams();

    const[search,setSearch] = useState([])
    const [image,setImage] = useState("")

    useEffect(()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=50&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`)
        .then(response => {
            console.log("******search data", response.data)
            setSearch(response.data.items)
        })
        .catch(error => {
            console.log(error)
        })
    }, [query])


    

  return (
    <div className='search_videos'>
        <div className='search_videos_display'>
        {search ? search.map((s)=>(
             <VideoCard 
             image={s.snippet.thumbnails.medium.url}
             channelImg={image}
             title={s.snippet.title}
             channel={s.snippet.channelTitle}
             views="200"
             publishedAt={s.snippet.publishedAt}
             id={s.id}/>
        )):null}
        </div>
    </div>
  )
}

export default SearchVideos;

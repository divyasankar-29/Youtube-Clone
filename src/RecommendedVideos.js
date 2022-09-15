import React,{useEffect, useState} from 'react'
import VideoCard from './VideoCard'
import {connect} from 'react-redux';
import { fetchData } from './redux/actions'
import CircularProgress from '@material-ui/core/CircularProgress';

function RecommendedVideos(props) {
  
  const {data,fetchData} = props;
  const [loading,setLoading] = useState(true);
  //const [scroll, setscroll] = useState(0);
  const [dataCount, setDataCount] = useState(50)
  const [image,setImage] = useState("")

  useEffect(()=>{
   fetchData(dataCount);
   if(data){
    setLoading(false)
   }
   //setscroll(0);
   console.log("rendering videos",data);
  },[])

  

  // let oldValue=0
  // window.addEventListener('scroll', function(e){
  // let newValue = window.pageYOffset;
  // console.log("***old new****",oldValue, newValue)
  //   if(oldValue - newValue < 0){
  //     setDataCount(dataCount+10)
  //   }
  //   oldValue = newValue;
  // });

  // const handleScroll = () => {
  //   if (
  //     Math.ceil(
  //       window.innerHeight + window.scrollY >= document.body.scrollHeight
  //     )
  //   ) {
  //     setscroll(1);
  //     return;
  //   }
  // };
  

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div className='videos'>
        <h2>Recommended</h2>
        {loading ? <CircularProgress color='secondary' /> : null}
        <div className="videos_display">
          {data ? 
            data.map((d)=>( 
            <VideoCard 
              image={d.snippet.thumbnails.medium.url}
              channelImg={d.snippet.thumbnails.medium.url}
              title={d.snippet.title}
              channel={d.snippet.channelTitle}
              views={d.statistics.viewCount} 
              publishedAt={d.snippet.publishedAt}
              id={d.id}/>))
           : null }
            

        </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    data : state.data
  }
}
const a = 30;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData : (dataCount) => dispatch(fetchData(dataCount))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecommendedVideos)

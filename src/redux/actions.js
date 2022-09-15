import axios from "axios";

import * as actionTypes from './actionTypes'

export const fetchDataRequest = () =>{
    return{
        type : actionTypes.FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) =>{
    return{
        type : actionTypes.FETCH_DATA_SUCCESS,
        payload : data
    }
}

export const fetchDataFail = (error) =>{
    return{
        type : actionTypes.FETCH_DATA_FAIL,
        payload : error
    }
}

export const fetchData = (dataCount) => {
    console.log("***fetch", dataCount)
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${dataCount}&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`
    //const url1 = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&key=AIzaSyCZn_iw1Eu3ODB_TtciNwCBDJIw8-ra2bw`
    return((dispatch) => {
        dispatch(fetchDataRequest)
        axios.get(url)
        .then(response => {
            //const channel = response.data.items.map((d)=>{channelInfo(d.channelId)})
            
            const data = response.data.items
            console.log("data received",data);
            dispatch(fetchDataSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
            console.log("error");
            dispatch(fetchDataFail(errorMsg))
        })
    })
}

// async function channelInfo(channelId){
//     const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=AIzaSyCGD4sQuPpMIkITdd_HIBQ5-5QpMdqSONw`)
// }


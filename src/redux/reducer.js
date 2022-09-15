import * as actionTypes from './actionTypes';

const initialState = {
    loading : true,
    data : [],
    error : ""
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.FETCH_DATA_REQUEST:
            return{
                ...state,
                loading:false
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:""
            }
        case actionTypes.FETCH_DATA_FAIL:
            return{
                ...state,
                loading:true,
                data:[],
                error:action.payload
            }
        default : return state
    }
}
export default reducer
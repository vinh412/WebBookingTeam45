import { apiGetHotels} from '../../services/hotels'
import actionTypes from './actionTypes'


export const gethotels= (payload)=> async (dispatch) =>{
    try {
       const response = await apiGetHotels(payload)
       
       if (response?.data.err === 0){
            dispatch({
                type: actionTypes.GETHOTELS_SUCCESS,
                hotels: response.data.response
            })
       } else{
        dispatch({
            type: actionTypes.GETHOTELS_FAIL,
            hotels: response.data.msg
        })
       }
    } catch (error) {
        dispatch({
            type: actionTypes.GETHOTELS_FAIL,
            hotels: null
        })
    }
}

import actionTypes from './actionTypes'
import {apiGetCurrent}  from '../../services/user'
 export const getCurrent = (payload) => async (dispatch) => {
    try {
        const response = await apiGetCurrent(payload)
        //console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT,
                currentUser: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT,
                msg: response.data.msg,
                currentUser: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT,
            currentUser: null,
            msg: error,
        })
    }
}

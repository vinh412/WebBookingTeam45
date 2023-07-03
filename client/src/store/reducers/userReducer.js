import actionTypes from "../actions/actionTypes";

const initState = {
    currentUser: null,
    msg:'',
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                currentUser: null
            }


        default:
            return state;
    }
}

export default userReducer
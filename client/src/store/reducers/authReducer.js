import actionTypes from "../actions/actionTypes";
const initState = {
   isLoggedIn: false,
   token: null,
   msg:''
}

const authReducer = (state = initState, actions) =>{
    switch (actions.type){
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                token: actions.data,
                msg:''
            }
        case actionTypes.LOGIN_FAIL:
        case actionTypes.REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: actions.data,
                token: null,
                
            }
            case actionTypes.LOGOUT:
                return {
                    ...state,
                    isLoggedIn:false,
                    token: null,
                    msg:''
                }
        default:
            return state;
    }
}

export default authReducer
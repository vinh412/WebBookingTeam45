import actionTypes from "../actions/actionTypes";
const initState = {
   isLoggedIn: false,
   token: null,
   msg:'',
   gmail:''
}

const authReducer = (state = initState, actions) =>{
    switch (actions.type){
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            console.log('ok')
            return{
                ...state,
                isLoggedIn: true,
                token: actions.data,
                msg:'',
                gmail:actions.gmail
            }
        case actionTypes.LOGIN_FAIL:
        case actionTypes.REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: actions.data,
                token: null,
                gmail:actions.gmail
                
            }
            case actionTypes.LOGOUT:
                return {
                    ...state,
                    isLoggedIn:false,
                    token: null,
                    msg:'',
                    gmail:actions.gmail
                }
        default:
            return state;
    }
}

export default authReducer
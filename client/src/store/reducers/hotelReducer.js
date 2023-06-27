import actionTypes from "../actions/actionTypes";
const initState = {
 hotels:[],
   msg:''
}

const hotelReducer = (state = initState, actions) =>{
    switch (actions.type){
       
        case actionTypes.GETHOTELS_SUCCESS:
         
            return{
                ...state,
                hotels: actions.hotels||[],
                msg:actions.msg||''
            }
       
           
        default:
            return state;
    }
}

export default hotelReducer
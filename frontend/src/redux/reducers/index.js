import {
  FETCH_LINK,
  RECEIVED_LINK

} from './../constants'


const initialState = {
  isLoading: false,
  isLoggedin: false,
  videoInfo:[]


}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LINK:
      return {
        ...state,
        videoInfo:action.data,
        isLoading:true,
        isLoggedin: true
      };
      case RECEIVED_LINK:
        return {
          ...state, 
          isLoading: false
        }
    
    default:
      return state;
  }
}

export default rootReducer;
import {LOGIN_USER_ASYNC } from '../constants'

const initialState = {
  user:{},
  isLoggedin: false,
  userLogin:[]
}



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_ASYNC':
      return {
        ...state,
        userLogin: [...state.userLogin, action.loginUser]
      }
    default:
      return state;
  }
}

export default rootReducer;
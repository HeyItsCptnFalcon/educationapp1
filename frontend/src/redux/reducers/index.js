
const initialState = {
  user:{},
  isLoggedin: false,
  userProfile:[]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
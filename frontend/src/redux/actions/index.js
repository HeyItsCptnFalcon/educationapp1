import axios from 'axios';
import { LOGIN_USER_ASYNC } from '../constants/'

export const loginUser = (user) => dispatch => {
    axios.post(`http://localhost:5000/users`, user)
       .then(response =>{
           console.log('response:', response.data)
           dispatch({type: LOGIN_USER_ASYNC, data: response.data })
       })
}
// export const loginUser = user => async dispatch => {
//     let response = await axios.post('http://localhost:5000/users', user);
//     dispatch({ type: LOGIN_USER_ASYNC, message: response });
//   }

export const loginUser = user => async dispatch => {
    let response = axios.post('');
    dispatch({ type: LOGIN_USER_ASYNC });
  }

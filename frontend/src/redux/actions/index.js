import axios from 'axios';
import { LOGIN_USER_ASYNC } from '../constants/'


export const loginUser = user => async dispatch => {
    let response = axios.post('');
    dispatch({ type: LOGIN_USER_ASYNC });
  }
import { REQUESTED_DATA } from '../constants';
import axios from 'axios';

export const getUserProfile = (id) => dispatch => {
    axios.get(`http://localhost:5000/users/id`)
       .then(response =>{
           console.log('response:', response.data)
           dispatch({type: REQUESTED_DATA, data: response.data })
       })
}


export const loginUser = () => dispatch => {

    
}
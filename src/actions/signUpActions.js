import {AUTH_USER} from "./types";
import axios from 'axios';
import {reset} from 'redux-form';




export const signup = (signUpData) =>{






    return function (dispatch) {
        axios.post("http://localhost:3090/signup", signUpData).then(response => {
            console.log(3);
            dispatch(reset('signup'));

        })
            .catch((err)=>{
                console.log(err);
                dispatch({type: "AUTH_USER_FAILURE", payload: err})
            })
    }


};


export const logout = () => {
  localStorage.removeItem('token');

  return{
      type: AUTH_USER,
      payload: ''
  }

};

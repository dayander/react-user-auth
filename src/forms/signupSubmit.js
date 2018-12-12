import axios from 'axios';
import {reset} from 'redux-form';
import {AUTH_USER, AUTH_USER_ERR} from "../actions/types";


export const signupSubmit = (userSignUp, callback) => async dispatch =>{
    const tokenKey = 'token';
    const userID = 'userID';
    const userName= 'userName';
    
    try{

    const response = await axios({
        method: 'post',
        url: 'http://localhost:3090/signup',
        data: userSignUp,
    });

    dispatch({type: AUTH_USER, payload: response.data });
    localStorage.setItem(tokenKey, response.data.token);
        localStorage.setItem(userID, response.data.userID);
        localStorage.setItem(userName, response.data.userName);


    dispatch(reset('signup'));
    callback()

    } catch (e) {

        dispatch({type: AUTH_USER_ERR, payload: e.response.data.error })
    }

};




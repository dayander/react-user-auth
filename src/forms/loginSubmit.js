import axios from 'axios';
import {reset} from 'redux-form';
import {AUTH_USER, AUTH_USER_ERR} from "../actions/types";


export const loginSubmit = (userLogin, callback) => async dispatch =>{
    const tokenKey = 'token';
    const userID = 'userID';
    const userName= 'userName';

    try{

        const response = await axios({
            method: 'post',
            url: 'http://localhost:3090/login',
            data: userLogin,
        });

        dispatch({type: AUTH_USER, payload: response.data });

        localStorage.setItem(tokenKey, response.data.token);
        localStorage.setItem(userID, response.data.userID);
        localStorage.setItem(userName, response.data.userName);

        dispatch(reset('login'));
        callback()

    } catch (e) {

        dispatch({type: AUTH_USER_ERR, payload: e.response.data.error })
    }

};



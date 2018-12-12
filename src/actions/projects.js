import axios from 'axios';
import {GET_PROJECTS, GET_PROJECTS_ERROR} from "./types";



export const getProjects = (userID) => async dispatch =>{
   const url = 'http://localhost:3090/projects/'+userID;

    try{

        const response = await axios({
            method: 'get',
            url: url,

        });

        dispatch({type: GET_PROJECTS, payload: response.data.projects });



    } catch (e) {

        dispatch({type: GET_PROJECTS_ERROR, payload: e })
    }

};



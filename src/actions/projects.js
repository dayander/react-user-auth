import axios from 'axios';
import {
    GET_PROJECTS,
    GET_PROJECTS_ERROR,
    GET_SINGLE_PROJECT,
    GET_SINGLE_PROJECT_ERROR,
    PROJECT_TITLE_EDITABLE, UPDATE_PROJECT_TITLE, UPDATE_PROJECT_TITLE_ERROR
} from "./types";

import {reset} from 'redux-form';



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


export const getSingleProject = (userID, projectID) => async dispatch =>{
    const url = 'http://localhost:3090/projects/'+userID+ '/'+ projectID;

    try{

        const response = await axios({
            method: 'get',
            url: url,

        });

        dispatch({type: GET_SINGLE_PROJECT, payload: response.data });



    } catch (e) {

        dispatch({type: GET_SINGLE_PROJECT_ERROR, payload: e })
    }

};


export const projectTitleEditable = () =>

    ({
        type: PROJECT_TITLE_EDITABLE,
        payload: true
    })



export const updateProjectName = (project, node) =>{
    console.log(project)

    const {userID, _id,projectName } = project;







    const url = 'http://localhost:3090/projects/'+userID+ '/'+ _id;

    return dispatch=>{
        axios.put(url, project)
            .then(response=>{
                dispatch({
                    type: UPDATE_PROJECT_TITLE,
                    payload: response.data
                })
                dispatch(reset('projectName'))

            })
            .catch(err=>{
                dispatch({
                    type: UPDATE_PROJECT_TITLE_ERROR,
                    payload: err
                })

            })

    }

};



export const createNewProject = () =>{

    


};





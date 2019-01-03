import {
    ADD_IDEA_TO_PROJECT,
    ADD_IDEA_TO_PROJECT_ERROR,
    DELETE_IDEA_FROM_PROJECT,
    DELETE_IDEA_FROM_PROJECT_ERROR,
    UPDATE_IDEA_PRIORITY, UPDATE_IDEA_PRIORITY_ERROR
} from "./types";
import axios from 'axios';
import {reset} from 'redux-form';




export const addIdeaToProject = (userID,projectID, ideaData) =>{

    ideaData.priority = 1;
    ideaData.dateCreated = new Date()



    //const {userID, projectID } = ideaData;

    const query = userID + "/" + projectID;


    const url = 'http://localhost:3090/ideas/'+ query;

    return dispatch=>{
        axios.put(url, ideaData)
            .then(response=>{
                dispatch({
                    type: ADD_IDEA_TO_PROJECT,
                    payload: response.data
                })

                dispatch(reset('add-idea'))


            })
            .catch(err=>{
                dispatch({
                    type: ADD_IDEA_TO_PROJECT_ERROR,
                    payload: err
                })

            })

    }

};



export const deleteIdeaFromProject = (userID, projectID, ideaData) =>{




    const query = userID + "/" + projectID;


    const url = 'http://localhost:3090/ideas/'+ query;

    return dispatch=>{
        axios.patch(url,ideaData)
            .then(response=>{
                dispatch({
                    type: DELETE_IDEA_FROM_PROJECT,
                    payload: response.data
                })



            })
            .catch(err=>{
                dispatch({
                    type: DELETE_IDEA_FROM_PROJECT_ERROR,
                    payload: err
                })

            })

    }

};


export const updateIdeaPriority = (userID, projectID, ideaData) =>{




    const query = userID + "/" + projectID;


    const url = 'http://localhost:3090/idea-priority/'+ query;

    return dispatch=>{
        axios.patch(url,ideaData)
            .then(response=>{
                dispatch({
                    type: UPDATE_IDEA_PRIORITY,
                    payload: response.data
                })



            })
            .catch(err=>{
                dispatch({
                    type: UPDATE_IDEA_PRIORITY_ERROR,
                    payload: err
                })

            })

    }

};




export const filterIdeas = (filter) =>{

  return ({
      type: "FILTER_IDEAS",
      payload: filter,
  })
};


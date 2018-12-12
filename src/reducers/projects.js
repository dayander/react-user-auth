import {GET_PROJECTS, GET_PROJECTS_ERROR} from "../actions/types";

const initialState = {

    projects:[]



};

export const projectsReducer=(state=initialState, action) =>{



    switch(action.type) {
        case GET_PROJECTS:
            return{
                ...state,
                projects: [...action.payload]
            };


        case GET_PROJECTS_ERROR:
            return {...state, errorMessage: action.payload};

        default:
            return state;

    };

};
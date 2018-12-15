import {
    GET_PROJECTS,
    GET_PROJECTS_ERROR,
    GET_SINGLE_PROJECT,
    GET_SINGLE_PROJECT_ERROR,
    PROJECT_TITLE_EDITABLE, UPDATE_PROJECT_TITLE
} from "../actions/types";

const initialState = {

    projects:[],
    singleProject:{},
    projectTitleIsEditable: false



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

        case GET_SINGLE_PROJECT:
            return{
                ...state,
                singleProject: {...action.payload}
            };

        case GET_SINGLE_PROJECT_ERROR:
            return {...state, errorMessage: action.payload};
        case PROJECT_TITLE_EDITABLE:
            return{...state, projectTitleIsEditable:true}

        case UPDATE_PROJECT_TITLE:
            return {
                ...state,
                singleProject: {...action.payload}
            };
        default:
            return state;

    };

};
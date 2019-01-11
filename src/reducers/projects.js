import {
    ADD_IDEA_TO_PROJECT,
    ADD_IDEA_TO_PROJECT_ERROR,
    DELETE_IDEA_FROM_PROJECT,
    DELETE_IDEA_FROM_PROJECT_ERROR,
    DELETE_PROJECT,
    GET_PROJECTS,
    GET_PROJECTS_ERROR,
    GET_SINGLE_PROJECT,
    GET_SINGLE_PROJECT_ERROR,
    PROJECT_TITLE_EDITABLE,
    UPDATE_PROJECT_TITLE
} from "../actions/types";

const initialState = {

    projects:[],
    singleProject:{ideas:[]},
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
            return{...state, projectTitleIsEditable:true};

        case UPDATE_PROJECT_TITLE:
            return {
                ...state,
                singleProject: {...action.payload}
            };
        case ADD_IDEA_TO_PROJECT:
            return{
            ...state,
            singleProject: {...action.payload}
        };
        case ADD_IDEA_TO_PROJECT_ERROR:
            return {...state, errorMessage: action.payload};
        case DELETE_IDEA_FROM_PROJECT:
            return{
                ...state,
                singleProject: {...action.payload}
            };
        case DELETE_IDEA_FROM_PROJECT_ERROR:
            return {...state, errorMessage: action.payload};


        case DELETE_PROJECT:

            const projectArr = state.projects;

            const newProjectArr = projectArr.filter(x=> x._id !== action.payload);

            return{
        ...state,
                projects: [...newProjectArr]
        };




        default:
            return state;

    };

};
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {authReducer} from "./auth";
import {menuReducer} from "./menu";
import {projectsReducer} from "./projects";


export default combineReducers({
    form: formReducer,
    auth: authReducer,
    menu: menuReducer,
    projects: projectsReducer

})
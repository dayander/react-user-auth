import {OPEN_MENU,CLOSE_MENU} from "../actions/types";


const initialState = {


    menuIsOpen: false,
    airaToggle: false


};

export const menuReducer=(state=initialState, action) =>{

    switch(action.type) {
        case OPEN_MENU:
            return{...state, menuIsOpen: action.payload, airaToggle: action.payload };

        case CLOSE_MENU:
            return{...state, menuIsOpen: action.payload, airaToggle: action.payload };



        default:
            return state;

    };

};


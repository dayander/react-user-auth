import {CLOSE_MENU, OPEN_MENU} from "./types";

export const openMenu = (isOpen) => {


    return{
        type: OPEN_MENU,
        payload: true
    }

};


export const closeMenu = () => {


    return{
        type: CLOSE_MENU,
        payload: false
    }

};
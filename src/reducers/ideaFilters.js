import  { IDEAS_OLD_TO_NEW,
    IDEAS_A_TO_Z,
    IDEAS_NEW_TO_OLD,
    IDEAS_PRIORITY_BOTTOM_TO_TOP,
    IDEAS_PRIORITY_TOP_TO_BOTTOM,
    IDEAS_Z_TO_A
} from "../actions/types";

const initialState = {

    filter: IDEAS_OLD_TO_NEW

}


export const ideaFilterReducer = (state = initialState, action) => {

    if(action.type === "FILTER_IDEAS"){
        switch(action.payload) {
            case IDEAS_OLD_TO_NEW:
               return {...state, filter: IDEAS_OLD_TO_NEW};

            case IDEAS_NEW_TO_OLD:

                return{...state, filter: IDEAS_NEW_TO_OLD};

            case IDEAS_A_TO_Z:
                return{...state, filter: IDEAS_A_TO_Z};

            case IDEAS_Z_TO_A:
                return{...state, filter: IDEAS_Z_TO_A};

            case IDEAS_PRIORITY_TOP_TO_BOTTOM:
                return{...state, filter: IDEAS_PRIORITY_TOP_TO_BOTTOM};

            case IDEAS_PRIORITY_BOTTOM_TO_TOP:
                return{...state, filter: IDEAS_PRIORITY_BOTTOM_TO_TOP};

            default:
                return state;

        };

    }else{
        return state;
    }

};
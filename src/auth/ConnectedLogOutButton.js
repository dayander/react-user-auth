import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import {LogOutButton} from './logOutButton';



const mapActionToDispatch= (dispatch)=>{
    return(
        {
            onClick: (e) => {
                return (dispatch())
            }
        })

};



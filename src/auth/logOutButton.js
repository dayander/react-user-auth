import React from 'react';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {logout} from "../actions/signUpActions";









const LogOutButton = (props) => {




    const logOutAction =()=>{

        props.logout();


        props.onLogOut();
        props.history.push('/login')






    };


    return <button onClick={logOutAction}>Log OUT</button>

};


const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        logout,
    }, dispatch)

};


export default connect(null, mapActionToDispatch)(withRouter(LogOutButton))





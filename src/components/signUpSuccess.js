import React from 'react';
import {Link} from 'react-router-dom';
import {requireAuth} from "../auth/requireAuth";


let SignUpSuccess = () => {


    return(
        <div>
            <h1>Sign Up Success!</h1>


            <Link to={'/'}> Home </Link>


        </div>
    )
};

//const SignUpSuccess = requireAuth(SignUpSuccess);

export default requireAuth(SignUpSuccess);


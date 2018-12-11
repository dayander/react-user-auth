import React from 'react';
import {Link} from 'react-router-dom';
import LogoutBase from '../auth/logoutBase';


export const Header = () =>{
    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/signup'} >Sign Up</Link>
            <Link to={'/login'} >Login</Link>
            <LogoutBase />


        </nav>
    )


};
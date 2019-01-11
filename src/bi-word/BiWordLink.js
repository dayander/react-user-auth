import React from 'react';
import {Link} from 'react-router-dom';


const BiWordLink = (props) =>{

    let path = "./projects/bi-word/" + props.userID +'/'+ props.projectID;


    return(
        <div>
            <Link to={path}>
                {props.children}
            </Link >
        </div>
    )


};




export default BiWordLink;
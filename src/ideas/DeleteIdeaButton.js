import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {deleteIdeaFromProject} from "../actions/ideas";





const DeleteIdeaButton = (props) =>{

    const {onClick, userID, projectID, idea } = props;

    const handleDelete = () =>{


      return onClick(userID, projectID, idea)
    };

    return(
        <div>

            <p onClick={handleDelete} >
                Delete
            </p>

        </div>
    )


};

const mapStateToProps = (state)=>{
    return({
        userID: state.projects.singleProject.userID,
        projectID: state.projects.singleProject._id

    })




};


const mapActionToDispatch = (dispatch) =>{

    return({
        onClick: (userID, projectID, idea) => dispatch(deleteIdeaFromProject(userID, projectID, idea))
    })

};

export default connect(mapStateToProps, mapActionToDispatch)(DeleteIdeaButton)
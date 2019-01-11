import React from 'react';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteProject} from '../actions/projects'

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';










const DeleteProjectButton = (props) => {




    const deleteProjectAction =()=>{

        props.DeleteProject(props.userID, props.projectID);
        props.onDeleteProject()



    };


    return   <Button variant="contained" color="secondary" onClick={deleteProjectAction}>
       Permanently Delete Project
    <DeleteIcon/>
    </Button>

};


const mapActionToDispatch= (dispatch)=>{
    return{
        DeleteProject: (userID, projectID)=> dispatch(deleteProject(userID, projectID))
    }

};


export default connect(null, mapActionToDispatch)(withRouter(DeleteProjectButton))





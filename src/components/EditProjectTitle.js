import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {projectTitleEditable} from '../actions/projects';
import EditProjectTitleForm from "../forms/EditProjectTitleForm";



class EditProjectTitle extends React.Component{


    constructor(props){
        super(props);



    }






    render(){
        const{projectTitleIsEditable, projectTitle, projectTitleEditable} = this.props;
     return(
         <div>
             <EditProjectTitleForm/>
         </div>
     )
    }

}


const mapStateToProps =(state) =>{
    return({
        projectTitleIsEditable: state.projects.projectTitleIsEditable,
        projectTitle: state.projects.singleProject.projectName
    })
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        projectTitleEditable
    },dispatch)
}





export default connect(mapStateToProps, mapDispatchToProps)(EditProjectTitle)
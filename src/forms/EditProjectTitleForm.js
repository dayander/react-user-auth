import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {connect} from 'react-redux'
import {updateProjectName} from "../actions/projects";
import {bindActionCreators} from 'redux'
import {withStyles} from '@material-ui/core/styles'



const styles = {
    input:{

    }

}






let EditProjectTitleForm = props => {





    const { handleSubmit, updateProjectName, classes } = props;

    console.log(classes)



    return( <form  onSubmit={handleSubmit(updateProjectName)}>


        <Field  onBlur={handleSubmit(updateProjectName)} name="projectName" component={'input'} type="text" id='projectName' className='form-control' />






    </form>)
};




EditProjectTitleForm = reduxForm({
    // a unique name for the form
    form: 'edit-project-title',
    enableReinitialize: true


})(EditProjectTitleForm);


const mapStateToProps = (state) =>{


  return({
      initialValues: state.projects.singleProject,

  })
};


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        updateProjectName
    }, dispatch)

};


EditProjectTitleForm = withStyles(styles, {withTheme: true})(EditProjectTitleForm);

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectTitleForm);
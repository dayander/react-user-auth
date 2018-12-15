import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {connect} from 'react-redux'
import {updateProjectName} from "../actions/projects";
import {bindActionCreators} from 'redux'
import {withStyles} from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import autosize from 'autosize';





const styles = {
    label:{
        display: 'block',

    },
    input:{
        width: "100%"
    },
    description:{
        width:"100%",

    },

}






class EditProjectDescriptionForm extends React.Component{


    constructor(props){
        super(props);

    }




    //console.log(classes)


    render(){
        const { handleSubmit, updateProjectName, classes } = this.props;



    return(
        <form className={classes.description} onSubmit={handleSubmit(updateProjectName)}>

            <FormLabel className={classes.label}  htmlFor={'project-description'}>
                Project Description
            </FormLabel>


<div className={'input-outer'}>
            <Field className={'input'}
                   onBlur={handleSubmit(updateProjectName)}
                   name="projectDescription" component={'textarea'}
                   type="text"
                   id='projectDescription'
                    />
</div>





            <Button   type='submit'
                      color='primary'
                      variant='outlined'
                      className={classes.input}>


                Save Description

            </Button>
        </form>


    )}
};




EditProjectDescriptionForm = reduxForm({
    // a unique name for the form
    form: 'edit-project-description',
    enableReinitialize: true


})(EditProjectDescriptionForm);


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


EditProjectDescriptionForm = withStyles(styles, {withTheme: true})(EditProjectDescriptionForm);

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectDescriptionForm);
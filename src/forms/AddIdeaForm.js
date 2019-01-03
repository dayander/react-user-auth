import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {connect} from 'react-redux'
import {addIdeaToProject} from "../actions/ideas";
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






class AddIdeaForm extends React.Component{


    constructor(props){
        super(props);

    }




    //console.log(classes)


    render(){
        const { handleSubmit, addIdeaToProject, classes, userID, projectID } = this.props;

        const submit = values =>{
          addIdeaToProject(userID, projectID, values)
        };



        return(
            <form className={classes.description} onSubmit={handleSubmit(submit)}>

                <FormLabel className={classes.label}  htmlFor={'idea'}>
                    Add Idea
                </FormLabel>


                <div className={'input-outer'}>
                    <Field className={'input-normal'}
                           name="idea" component={'input'}
                           type="text"
                           id='idea'
                    />
                </div>





                <Button   type='submit'
                          color='primary'
                          variant='outlined'
                          className={classes.input}>


                    Addn Idea

                </Button>
            </form>


        )}
};




AddIdeaForm = reduxForm({
    // a unique name for the form
    form: 'add-idea',



})(AddIdeaForm);


const mapStateToProps = (state) =>{


    return({
        userID: state.projects.singleProject.userID,
        projectID: state.projects.singleProject._id

    })
};


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        addIdeaToProject
    }, dispatch)

};


AddIdeaForm = withStyles(styles, {withTheme: true})(AddIdeaForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddIdeaForm);
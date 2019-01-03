import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';;
import {withStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


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

class Form extends React.Component{


    constructor(props){
        super(props);
    }




    render(){
        return(
            <form>
                <FormLabel className={classes.label}  htmlFor={'project-description'}>
                </FormLabel>

                <Field className={'input'}
                       onBlur={handleSubmit(updateProjectName)}
                       name="projectDescription" component={'textarea'}
                       type="text"
                       id='projectDescription'
                />






            <Button   type='submit'
        color='primary'
        variant='outlined'
        className={classes.input}>




        </Button>

            </form>
        )
    }

}



const mapStateToProps = (state) =>{
    return({

    })
};



const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({

    }, dispatch)
};


Form = reduxForm({
    form: 'add-form-name',
    enableReinitialize: true
});


Form = withStyles(styles, {withTheme: true})(Form)



export default connect(mapStateToProps, mapDispatchToProps)(Form)
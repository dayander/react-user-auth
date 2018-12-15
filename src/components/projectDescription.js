import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import EditProjectDescriptionForm from '../forms/EditProjectDescriptionForm';




const styles = {
    description:{
        width:"100%"
    },
    label:{
        display: 'block',

    },
    input:{
        width: "100%"
    },
    innerPadding:{
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    half:{
        width: '50%',
        minWidth: '50%'
    },
    innerPaper: {
        marginTop: '15px',
        marginBottom: '15px',
        width: 'calc(100% - 30px)',
        padding: '10px  ',
        minHeight: '100px'



    },
}





const ProjectDescription = props =>{




    return(
        <Grid container className={props.classes.innerPadding}>
            <Grid item xs={12 }  >
                <Paper elevation={1} className={props.classes.innerPaper}>
                    <EditProjectDescriptionForm />





                </Paper>


            </Grid>
            {/*<Grid item xs={12 } md={6} >*/}
                {/*<Paper className={props.classes.innerPaper}>*/}

                {/*<Typography component={'h3'} variant={'subtitle2'} >Top Ideas</Typography>*/}
                {/*</Paper>*/}
            {/*</Grid>*/}






        </Grid>
    )
};


export default withStyles(styles, {withTheme:true})(ProjectDescription)
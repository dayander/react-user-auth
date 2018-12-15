import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux';
import ProjectDescription from "./projectDescription";
import EditableProjectTitle from './EditProjectTitle'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    feed: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    feedItem: {
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%',


    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    panelHeader:{
        marginBottom: '15px',
        padding: '15px 15px 15px 15px',
        background: 'linear-gradient(45deg, #FF9801 30%, #FF3D00 90%)',

    },
    subhead:{
        padding: '15px'
    },
    details:{
        padding: '0 15px',
        textAlign: 'center'

    },
    projectTitle:{
        display: 'inline-block',
        position: 'relative',
        marginBottom: '15px',
        padding: '15px 0 15px 15px',
        background: 'linear-gradient(45deg, #FF9801 30%, #FF3D00 90%)',
        width: 'calc(100% - 15px)',
        overflow: 'hidden'
    }



})

class IdeaFilerController extends Component {
    state = {elevation: 3};


    render() {

        const {classes, project} = this.props;
        return (
            <Paper
                className={classes.feedItem}
                elevation={this.state.elevation}>

                <div className={classes.projectTitle}>
                    <Grid container >
                        <Grid item xs={12} sm={8} md={4} >
                    <EditableProjectTitle/>
                        </Grid>
                    </Grid>
                </div>
                <div  >
                    <Typography component={'h2'} variant={'subtitle2'} className={classes.details}>
                        Project Details
                    </Typography>

                    <ProjectDescription  />
                </div>
                <div className={classes.buttons}>
                    FilerIdeas here
                </div>
            </Paper>
        )
    }
}


const mapStateToProps =(state) => {
 return{
     project: state.projects.singleProject
 }
};




IdeaFilerController = connect(mapStateToProps)(IdeaFilerController);

export default withStyles(styles, {withTheme: true})(IdeaFilerController)
import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {IdeaFilterHolder} from '../ideas/ideaFilterHolder';
import IdeaList from '../layout/ideaList';
import {getSingleProject} from "../actions/projects";
import {bindActionCreators} from "redux";
import AddIdeaForm from '../forms/AddIdeaForm';
import TwoWords from "./TwoWords";
import {BiWordApp} from "./BiWordApp";





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
    },
    divider:{
        margin: '15px 0 30px 0'
    }



});




class BiWordHolder extends React.Component {

    constructor(props){
        super(props);

    }


    state = {elevation: 3};


    componentDidMount(){

        this.props.getSingleProject(this.props.match.params.userID, this.props.match.params.projectID)

    }


    render() {



        const {classes, project, projectFromParent} = this.props;

        console.log(this.props);


        return (
            <Paper
                className={classes.feedItem}
                elevation={this.state.elevation}>

                <div className={classes.projectTitle}>
                    <Grid container >
                        <Grid item xs={12}   >
                            <Typography component={'h1'} variant={'h4'}>
                                Bi-Word Association
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div  >
                    <Typography component={'h2'} variant={'h3'} className={classes.details}>
                        {project.projectName}
                    </Typography>


                    <Typography component={'h3'} variant={'subtitle2'} className={classes.details}>
                        {project.projectDescription}
                    </Typography>
                    <Divider className={classes.divider}/>


                </div>

                    <BiWordApp/>

                <div >



                </div>
                <Divider className={classes.divider}/>

                <IdeaFilterHolder />


                <IdeaList project={projectFromParent}/>






            </Paper>
        )
    }
}


const mapStateToProps =(state) => {
    return{
        project: state.projects.singleProject
    }
};


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getSingleProject
    },dispatch)
};




BiWordHolder = connect(mapStateToProps, mapDispatchToProps)(BiWordHolder);

export default withStyles(styles, {withTheme: true})(BiWordHolder)
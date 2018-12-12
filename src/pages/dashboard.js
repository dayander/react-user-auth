import React from 'react';
import ProjectExpansionDetailPanel from '../components/ProjectExpansionDetailPanel';
import {getProjects} from "../actions/projects";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requireAuth} from "../auth/requireAuth";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';




class DashboardPage extends React.Component{


    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getProjects(this.props.userID)
    }



    render(){
console.log(this.props.classes.paper);




        let projectList = this.props.projects.map((project, i)=>{
           return(
               <div key={i}>
                <ProjectExpansionDetailPanel/>
               </div>
           )
        });

        return(
            <div>
                <h1>Project Dashboard</h1>
                <Paper   />



                {projectList}
            </div>
        )
    }
};





const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    }
});


const mapStateToProps = (state) =>{
    return(
        {
            userID: state.auth.userID,
            projects: state.projects.projects
        }
    )
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getProjects
    },dispatch)
};

DashboardPage = connect(mapStateToProps, mapDispatchToProps)(requireAuth(DashboardPage));


export default withStyles( styles, {withTheme: true})(DashboardPage)

import React from 'react';
import IdeaFilterController from '../components/ideaFilterController';
import {getSingleProject} from "../actions/projects";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';


class DetailIdeasPage extends React.Component{

    componentDidMount(){

        this.props.getSingleProject(this.props.match.params.userID, this.props.match.params.projectID)

    }


    render(){


    return(
        <div>
            <IdeaFilterController />

        </div>
    )
    }
}


const mapStateToProps = (state) =>{
    return{
        projects: state.projects.projects

    }
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getSingleProject
    },dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailIdeasPage);
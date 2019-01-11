import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import {connect} from 'react-redux';
import {createNewProject} from "../actions/projects";

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
        padding: '15px 0 15px 15px',



        background: 'linear-gradient(45deg, #FF9801 30%, #FF3D00 90%)',

    }


})

class FilterPanelBase extends Component {

    constructor(props){
        super(props);


        this.state ={
            elevation: 3
        }
    }





    render() {

        const createProject=()=>{
            this.props.createNewProject(this.props.userID, this.props.history)
        };

        console.log(this.props)

        return (
            <Paper
                className={this.props.classes.feedItem}
                elevation={this.state.elevation}

            >

                <h1 className={this.props.classes.panelHeader}>Project Dashboard</h1>

                <p>Lots of fun here</p>
                <div className={this.props.classes.buttons}>
                    <Button  color="primary" onClick={createProject}>Create New Project</Button>
                    <Button  color="secondary" onClick={this.props.onClick}>Secondary Button</Button>
                </div>
            </Paper>
        )
    }
}


const mapStateToProps = (state) =>{
    return({
        userID: state.auth.userID
    })
};

const mapActionToDispatch = (dispatch) =>{

    return{
        createNewProject: (userID, history) => dispatch(createNewProject(userID, history))
    }

};


FilterPanelBase = connect(mapStateToProps, mapActionToDispatch)(FilterPanelBase);

export default withStyles(styles, {withTheme: true})(FilterPanelBase);//
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteIdeaButton from '../ideas/DeleteIdeaButton';
import {connect} from 'react-redux';
import {deleteIdeaFromProject, updateIdeaPriority} from "../actions/ideas";




class IdeaDetailsMenu extends React.Component{


    constructor(props){
        super(props);

        this.state = {
        anchorEl: null,
    };

    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    handleDelete = () => {
        const {userID, projectID, onClick, idea } = this.props;

        onClick(userID,projectID,idea);
        this.handleClose()

    };
    handleSetTop = () => {
        const {userID, projectID, onSetTop, idea } = this.props;
        idea.priority = 2;

        onSetTop(userID,projectID,idea);
        this.handleClose()

    };
    handleSetBottom = () => {
        const {userID, projectID, onSetBottom, idea } = this.props;

        idea.priority = 0;

        onSetBottom(userID,projectID,idea);
        this.handleClose()

    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const {idea} = this.props;

        const deleteButton = () => (<DeleteIdeaButton idea={idea}/>)

        return (
            <div className={'pull-right'}>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="idea-actions-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                >

                    <MenuItem onClick={this.handleSetTop}>
                        Top
                    </MenuItem>

                    <MenuItem onClick={this.handleSetBottom}>
                        Bottom
                    </MenuItem>

                    <MenuItem   onClick={this.handleDelete}>
                        Delete
                    </MenuItem>

                </Menu>
            </div>
        );
    }
}




const mapStateToProps = (state)=>{
    return({
        userID: state.projects.singleProject.userID,
        projectID: state.projects.singleProject._id

    })




};


const mapActionToDispatch = (dispatch) =>{

    return({
        onClick: (userID, projectID, idea) => dispatch(deleteIdeaFromProject(userID, projectID, idea)),
        onSetTop: (userID, projectID, idea) => dispatch(updateIdeaPriority(userID, projectID, idea)),
        onSetBottom: (userID, projectID, idea) => dispatch(updateIdeaPriority(userID, projectID, idea)),
    })

};


export default connect(mapStateToProps, mapActionToDispatch)(IdeaDetailsMenu);
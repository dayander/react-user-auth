import React from 'react';
import ReactModal from 'react-modal';
import DeleteProjectButton from './DeleteProjectButton';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';









ReactModal.setAppElement(document.getElementById('root'));

class ProjectDeleteModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);

        this.closeModal = this.closeModal.bind(this);


    }

    openModal() {
        this.setState({modalIsOpen: true});
    }



    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.openModal}>
                    Delete Project
                    <DeleteIcon/>
                </Button>
                <ReactModal
                    isOpen={this.state.modalIsOpen}

                    onRequestClose={this.closeModal}

                    contentLabel="Delete Project"
                >

                    <strong>Are you sure you would like to delete this project?</strong>
                    <button onClick={this.closeModal}>Cancel</button>
                    <DeleteProjectButton onDeleteProject={this.closeModal} userID={this.props.userID} projectID={this.props.projectID} />

                </ReactModal>
            </div>
        );
    }
}




export default ProjectDeleteModal;




import React from 'react';
import ReactModal from 'react-modal';
import LogOutButton from "./logOutButton";

ReactModal.setAppElement(document.getElementById('root'));

class LogoutBase extends React.Component {
    constructor() {
        super();

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
                <button onClick={this.openModal}>Logout</button>
                <ReactModal
                    isOpen={this.state.modalIsOpen}

                    onRequestClose={this.closeModal}

                    contentLabel="Logout"
                >

                    <p> Would you like to logout?</p>
                    <button onClick={this.closeModal}>Cancel</button>
                    <LogOutButton onLogOut={this.closeModal}/>

                </ReactModal>
            </div>
        );
    }
}




export default (LogoutBase);





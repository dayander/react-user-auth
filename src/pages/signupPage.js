import React from 'react'
import SignUpForm from '../forms/signup';
import {Well, Row, Col, Panel} from  'react-bootstrap';

import {signupSubmit} from "../forms/signupSubmit";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class SignUpPage extends React.Component {
    submit = values => {

        this.props.signupSubmit(values, ()=>{
            this.props.history.push('./dashboard')
        });


    };
    render() {
        return (
            <div>
                <Col xs={12}>
                    <Panel>
                        <SignUpForm onSubmit={this.submit} errorMessage={this.props.errorMessage} />
                    </Panel>
                </Col>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage
});

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        signupSubmit,
    }, dispatch)

}


export default connect(mapStateToProps, mapActionToDispatch)(SignUpPage);
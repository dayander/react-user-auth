import React from 'react'
import LoginForm from '../forms/login';
import {Well, Row, Col, Panel} from  'react-bootstrap';

import {loginSubmit} from "../forms/loginSubmit";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class LoginPage extends React.Component {
    submit = values => {

        this.props.loginSubmit(values, ()=>{
            this.props.history.push('./dashboard')
        });


    };
    render() {
        return (
            <div>
                <Col xs={12}>
                    <Panel>
                        <LoginForm onSubmit={this.submit} errorMessage={this.props.errorMessage} />
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
        loginSubmit,
    }, dispatch)

}


export default connect(mapStateToProps, mapActionToDispatch)(LoginPage);
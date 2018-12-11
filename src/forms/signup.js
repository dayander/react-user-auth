import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button, Form} from 'react-bootstrap';
import {signupSubmitSubmit} from "./signupSubmit";






let SignUpForm = props => {


    const { handleSubmit, errorMessage } = props;
    return( <form onSubmit={handleSubmit}>


        <FormGroup>

            <ControlLabel htmlFor="firstName">First Name</ControlLabel>

            <Field className='form-control' id='firstName' name="firstName" component="input" type="text" autoComplete={'none'} />

        </FormGroup>

        <FormGroup>
            <ControlLabel htmlFor="lastName">Last Name</ControlLabel>

            <Field className='form-control' id='lastName' name="lastName" component="input" type="text" autoComplete={'none'} />
        </FormGroup>


        <FormGroup>
            <ControlLabel htmlFor="email">Email</ControlLabel>
            <Field name="email" component="input" type="email" id='email' className='form-control' autoComplete={'none'}/>

        </FormGroup>
        <FormGroup>
            <ControlLabel htmlFor="password">Password</ControlLabel>
            <Field name="password" component="input" type="password" id='password' className='form-control' autoComplete={'none'}/>

        </FormGroup>
        {errorMessage}

        <Button type="submit">Submit</Button>






    </form>)
};

SignUpForm = reduxForm({
    // a unique name for the form
    form: 'signup',

})(SignUpForm);

export default SignUpForm
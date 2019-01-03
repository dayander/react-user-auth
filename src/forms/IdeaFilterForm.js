import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import FormLabel from '@material-ui/core/FormLabel';
import {
    IDEAS_A_TO_Z,
    IDEAS_NEW_TO_OLD,
    IDEAS_OLD_TO_NEW, IDEAS_PRIORITY_BOTTOM_TO_TOP,
    IDEAS_PRIORITY_TOP_TO_BOTTOM,
    IDEAS_Z_TO_A
} from "../actions/types";
import {filterIdeas} from "../actions/ideas";

let IdeaFilterForm = props =>{
    const {onChange}= props;


    return(
        <div>
            <form  >
                <FormLabel htmlFor={'filterIdea1'}>
                    Filter Ideas
                </FormLabel>
                <Field name={'filterIdea1'} component={'select'} onChange={onChange}>
                    <option value={IDEAS_OLD_TO_NEW}>Oldest to Newest</option>
                    <option value={IDEAS_NEW_TO_OLD}>Newest to Oldest</option>
                    <option value={IDEAS_A_TO_Z}> A to Z</option>
                    <option value={IDEAS_Z_TO_A}>Z to A</option>
                    <option value={IDEAS_PRIORITY_TOP_TO_BOTTOM}>Priority: Top to Bottom</option>
                    <option value={IDEAS_PRIORITY_BOTTOM_TO_TOP}>Priority: Bottom to Top</option>
                </Field>

            </form>
        </div>
    )

};



IdeaFilterForm = reduxForm({
    form: "idea-filer-form"
})(IdeaFilterForm);



const mapActionToDispatch = dispatch =>{

    return({
        onChange: (filter) => dispatch(filterIdeas(filter.filterIdea1))
    })

};

export default connect(null, mapActionToDispatch)(IdeaFilterForm);
import React from 'react';
import TwoWords from './TwoWords';
import AddIdeaForm from '../forms/AddIdeaForm';
import NextPreviousHolder from './NextPreviousHolder';





export const BiWordApp = (props) =>{


    return(
        <div>


            <TwoWords/>
            <NextPreviousHolder/>
            <AddIdeaForm />

        </div>
    )


};
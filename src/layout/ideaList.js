import React from 'react'
import {connect} from 'react-redux';
import {withStyles,withTheme} from '@material-ui/core/styles'
import SingleIdeaBase from "../components/SingleIdeaBase";
import  { IDEAS_OLD_TO_NEW,
    IDEAS_A_TO_Z,
    IDEAS_NEW_TO_OLD,
    IDEAS_PRIORITY_BOTTOM_TO_TOP,
    IDEAS_PRIORITY_TOP_TO_BOTTOM,
    IDEAS_Z_TO_A
} from "../actions/types";


const aToZ = (a,b) =>{

    const ideaA = a.ideaString.toLowerCase();
    const ideaB = b.ideaString.toLowerCase();

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison;


};
const zToA = (a,b) =>{

    const ideaA = a.ideaString.toLowerCase();
    const ideaB = b.ideaString.toLowerCase();

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison * -1;


};

const PriorityAToZ = (a,b) =>{

    const ideaA = a.priority;
    const ideaB = b.priority;

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison * -1;


};

const PriorityZToA = (a,b) =>{

    const ideaA = a.priority;
    const ideaB = b.priority;

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison;


};

const dateAToZ = (a,b) =>{

    const ideaA = a.priority;
    const ideaB = b.priority;

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison * -1;


};


const dateZToA = (a,b) =>{

    const ideaA = a.priority;
    const ideaB = b.priority;

    let comparison = 0;
    if (ideaA > ideaB) {
        comparison = 1;
    } else if (ideaA < ideaB) {
        comparison = -1;
    }
    return comparison;


};



const sortIdeas = (filter, ideas) => {
    switch (filter) {
        case IDEAS_OLD_TO_NEW:
            return ideas.sort(dateAToZ);
        case IDEAS_NEW_TO_OLD:
            return ideas.sort(dateZToA);
        case IDEAS_A_TO_Z:
            return ideas.sort(aToZ);
        case IDEAS_Z_TO_A:
            return ideas.sort(zToA);
        case IDEAS_PRIORITY_TOP_TO_BOTTOM:
            return ideas.sort(PriorityAToZ);
        case IDEAS_PRIORITY_BOTTOM_TO_TOP:
            return ideas.sort(PriorityZToA);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};



const IdeaList = (props) =>{
    let {ideas, filter} = props;

    console.log(ideas);

    ideas = sortIdeas(filter, ideas);



    const ideaList = ideas.map((idea, i)=>{

        return(
            <li key={i}>
                 <SingleIdeaBase idea={idea}/>
            </li>
        )
    });




    return(
        <div>
            <ol>
                {ideaList}

            </ol>
        </div>
    )

};



const mapStateToProps = (state) =>{
    return({
        ideas: state.projects.singleProject.ideas,
        filter: state.ideaFilter.filter,
    })
};


export default connect(mapStateToProps)(IdeaList);
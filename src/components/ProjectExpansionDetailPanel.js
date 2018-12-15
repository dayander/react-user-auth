import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'


const styles = theme => ({
    root: {
        width: '100%',
        marginBottom: '15px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    column2: {
        flexBasis: '65.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,

    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        smallText:{
            fontSize: '18px !important'
        }
    },
});

const ProjectExpansionDetailPanel=(props)=> {
    const { classes, project } = props;

    const topIdeas = project.topIdeas.map((idea, i)=>{
        return<p key={i}>{idea.ideaString}</p>
    })

    return (
        <div className={classes.root}>
            <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column}>
                        <Typography className={classes.heading}>{project.projectName}</Typography>
                    </div>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Grid container>
                    <Grid item xs={12} md={4}>
                        <Typography variant={'h3'} component={'h3'} className={classes.heading}>Top Ideas</Typography>
                        {topIdeas}
                    </Grid>




                    <Grid item xs={12} md={8}>
                        <Typography variant="h3" component={'h3'} className={classes.smallText} >
                            Problem Description
                        </Typography>
                        <Typography variant='caption' component={'p'}>
                            {project.projectDescription}
                        </Typography>
                    </Grid>

                    </Grid>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                   <Link to={'./projects/'+project.userID +'/'+ project._id} >
                       View Ideas
                   </Link>
                </ExpansionPanelActions>
            </ExpansionPanel>

        </div>
    );
}



export default withStyles(styles)(ProjectExpansionDetailPanel);
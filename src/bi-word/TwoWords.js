import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core';


const styles = theme=>({
    center:{
        textAlign: "center",
        paddingBottom: "10px"
    }
})


const TwoWords = (props) =>{

  const wordOne = "Toilet";
  const wordTwo = "Apple";


    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography className={props.classes.center} component={'h2'} variant={'body1'}>
                    Association Words
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={props.classes.center} variant={'h2'} component={'p'}>
                    {wordOne}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={props.classes.center} variant={'h2'} component={'p'}>
                    {wordTwo}
                </Typography>
            </Grid>

        </Grid>
    )
};



export default withStyles(styles, {withTheme: true})(TwoWords)

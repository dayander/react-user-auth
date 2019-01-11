import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles'
import {batchAddWords} from "../actions/words";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const styles = theme =>({
    center:{
        justifyContent: "center"
    },
    second:{
        float: "right"
    },
    both:{
        marginTop: "10px"
    }

});


let NextPreviousHolder = (props) =>{

    const {classes} = props;

    return(
        <Grid className={classes.center} container >

                <Grid item xs={8}>
                    <Button className={classes.both} variant={'contained'} color={'primary'}>
                        Previous Words
                    </Button>


                    <Button className={classes.both +' '+ classes.second} variant={'contained'} color={'primary'}>
                        Next Words
                    </Button>
                </Grid>


        </Grid>
    )
};



const mapActionToDispatch = (dispatch) =>{
  return bindActionCreators({
      batchAddWords
  },dispatch)
};


NextPreviousHolder = connect(null, mapActionToDispatch)(NextPreviousHolder);

export default withStyles(styles)(NextPreviousHolder)
import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    feed: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    feedItem: {
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%',


    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    panelHeader:{


        marginBottom: '15px',
        padding: '15px 0 15px 15px',



        background: 'linear-gradient(45deg, #FF9801 30%, #FF3D00 90%)',

    }


})

class FilterPanelBase extends Component {
    state = {elevation: 3}
    render() {
        const {classes} = this.props;
        return (
            <Paper
                className={classes.feedItem}
                elevation={this.state.elevation}

            >

                <h1 className={classes.panelHeader}>Project Dashboard</h1>

                <p>Lots of fun here</p>
                <div className={classes.buttons}>
                    <Button  color="primary" onClick={this.props.onClick}>Primary</Button>
                    <Button  color="secondary" onClick={this.props.onClick}>Secondary Button</Button>
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles, {withTheme: true})(FilterPanelBase)
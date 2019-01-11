import React from 'react';
import {Link} from 'react-router-dom';
import LogoutBase from '../auth/logoutBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Drawer from '@material-ui/core/Drawer';
import {openMenu, closeMenu} from '../actions/mainMenu';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';







const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});





let HeaderBase = (props) =>{

    let logOutButton = (
        <div className={'pull-right'}>
            <LogoutBase />
        </div>
    )

    let LoginButton = (
        <div className={'pull-right'}>
            <Link id={'nav-login'} to={'/login'} >Login</Link>
        </div>
            )

    let loggedInMenu = (
        <ListItem onClick={props.handleDrawerClose}>
            <Link to={'/settings'} >Settings</Link>
        </ListItem>

    )


    let signUpLogin = (
        <div>

        <ListItem onClick={props.handleDrawerClose}>
            <Link to={'/signup'} >Sign Up</Link>
        </ListItem>
        <ListItem onClick={props.handleDrawerClose}>
<Link  to={'/login'} >Login</Link>
</ListItem>
        </div>
    )





    return(
        <div>


            <AppBar>
            <Toolbar>
                <IconButton onClick={()=>props.onClick(true)}>
                    <Menu/>

                </IconButton>
                <Drawer
                    className={props.classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={props.menuIsOpen}
                    onClose={props.handleDrawerClose}
                    classes={{
                        paper: props.classes.drawerPaper,
                    }}
                >
                    <div className={props.classes.drawerHeader}>
                        <IconButton onClick={props.handleDrawerClose}>
                            {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                        <div className={'user-menu '}>{props.fullName}</div>
                    <Divider />
                    <nav>
                        <List>
                            <ListItem onClick={props.handleDrawerClose}>
                                <Link to={'/'}>Home</Link>
                            </ListItem>
                            <ListItem onClick={props.handleDrawerClose}>
                                <Link to={'/dashboard'} >Dashboard</Link>
                            </ListItem>
                            {(props.auth)? loggedInMenu: signUpLogin }

                        </List>
                    </nav>
                    <Divider />

                </Drawer>



                {(props.auth)? logOutButton: LoginButton }



            </Toolbar>

        </AppBar>



        </div>
    )


};


const mapStateToProps = (state) =>{
  return{
    menuIsOpen: state.menu.menuIsOpen,
      auth: state.auth.authenticated,
      fullName: state.auth.userName
  }
};

const mapActionToProps = (dispatch)=>{

    return({
        onClick: (e)=> dispatch(openMenu(e)),
        handleDrawerClose: (e) => dispatch(closeMenu(e))
    })

};



let Header = connect(mapStateToProps, mapActionToProps)(HeaderBase);

export default withStyles(styles, { withTheme: true })(Header);
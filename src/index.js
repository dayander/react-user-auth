import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from "./pages/home";
//import {SignUpPage} from "./pages/signup";
import LoginPage from "./pages/loginPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import SignUpPage from "./pages/signupPage";

import reducers from './reducers/index';
import SignUpSuccess from "./components/signUpSuccess";
import DashboardPage from "./pages/dashboard";
import {MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from "./material-ui/theme";


const middleware =  applyMiddleware( thunk, logger);

const store = createStore(reducers, {
    auth: {authenticated: localStorage.getItem('token'), userID: localStorage.getItem('userID'), userName: localStorage.getItem('userName') }
}, middleware);


const Main =() =>{

    return (
    <Provider store={store} >
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
            <App>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/signup'} component={SignUpPage} />
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signupsuccess'} component={SignUpSuccess}/>
                <Route path={'/dashboard'} component={DashboardPage}/>
            </App>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
)
};


ReactDOM.render(<Main/>, document.getElementById('root') );
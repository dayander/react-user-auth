import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {Router, Route} from 'react-router-dom';
import {Home} from "./pages/home";
//import {SignUpPage} from "./pages/signup";
import LoginPage from "./pages/loginPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import SignUpPage from "./pages/signupPage";
import history from './util/history';
import reducers from './reducers/index';
import SignUpSuccess from "./components/signUpSuccess";
import DashboardPage from "./pages/dashboard";
import {MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from "./material-ui/theme";
import DetailIdeasPage from "./pages/detailIdeasPage";
import {SettingsPage} from "./pages/SettingsPage";
import BiWordHolder from "./bi-word/BiWordHolder";


const middleware =  applyMiddleware( thunk, logger);

const store = createStore(reducers, {
    auth: {authenticated: localStorage.getItem('token'), userID: localStorage.getItem('userID'), userName: localStorage.getItem('userName') }
}, middleware);


const Main =() =>{

    return (
    <Provider store={store} >
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
            <App>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/signup'} component={SignUpPage} />
                <Route path={'/settings'} component={SettingsPage}/>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signupsuccess'} component={SignUpSuccess}/>

                <Route path={'/dashboard'} component={DashboardPage}/>
                <Route path={'/projects/bi-word/:userID/:projectID'} exact={true}  component={BiWordHolder} />
                <Route path={'/projects/:userID/:projectID'} exact={true} component={DetailIdeasPage}/>


            </App>
            </MuiThemeProvider>
        </Router>
    </Provider>
)
};


ReactDOM.render(<Main/>, document.getElementById('root') );
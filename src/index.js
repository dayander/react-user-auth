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


const middleware =  applyMiddleware( thunk, logger);

const store = createStore(reducers, {
    auth: {authenticated: localStorage.getItem('token')}
}, middleware);


const Main =() =>{

    return (
    <Provider store={store} >
        <BrowserRouter>
            <App>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/signup'} component={SignUpPage} />
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signupsuccess'} component={SignUpSuccess}/>
            </App>
        </BrowserRouter>
    </Provider>
)
};


ReactDOM.render(<Main/>, document.getElementById('root') );
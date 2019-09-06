import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserInfo from './components/user_info';
import AppIndex from './components/app_index';
import NavLinks from './components/nav_links';
import NormalPage from './components/normal_page';
import AuthedPage from './components/authed_page';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function Error(){
    return (<h1>404 - NOT FOUND</h1>)
}


ReactDOM.render( <
    Provider store = { createStoreWithMiddleware(reducers) } >
        <BrowserRouter >
        <NavLinks / >
        <div className = { "container py-4" } >
            <Switch >
                <Route path = { "/page" } component = { NormalPage }/>
                <Route path = { "/user_info" } component = { UserInfo } />
                <Route path = { "/onlyloggedin" } component = { AuthedPage }/>
                <Route path = { "/" } component = { AppIndex }/>
                <Route component={Error} />
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>, document.querySelector('#app-root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { handleDataFromGithub, textUpdates } from './reducers';
import { Provider, connect } from 'react-redux';

const rootReducter = combineReducers({handleDataFromGithub, textUpdates})
const store = createStore(rootReducter, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

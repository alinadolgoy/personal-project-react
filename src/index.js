import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers , compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { handleDataFromGithub, textUpdates } from './reducers';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({alina: handleDataFromGithub, textUpdates});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware))
);


ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

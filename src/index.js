import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import appReducer from './reducers/appReducer';

function configStore(initialState={acb:"axz"}) {
    return createStore(appReducer, applyMiddleware(thunk));
  }


ReactDOM.render(
    <Provider store = {configStore()}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();


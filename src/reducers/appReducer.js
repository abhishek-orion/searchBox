import {combineReducers} from 'redux';
import SearchActionReducer from './searchActionReducer';

const rootReducer = combineReducers({ searchReducer: SearchActionReducer });


export default rootReducer;
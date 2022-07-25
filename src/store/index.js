import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import contactReducer from '../reducers/contactReducer';

const rootReducer = combineReducers({contact: contactReducer});

const store = configureStore({reducer: rootReducer});

export default store;

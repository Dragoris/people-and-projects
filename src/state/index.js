import { combineReducers } from 'redux';
import memberReducer from './memberReducer';
import pageReducer from './pageReducer';
import typeReducer from './typeReducer';

export default combineReducers({ 
	memberReducer, 
	pageReducer,
	typeReducer
});
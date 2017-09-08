import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';

const RootReducer = combineReducers({
	session: AuthReducer
});

export default RootReducer;

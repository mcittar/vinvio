import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import WineReducer from './wine_reducer';

const RootReducer = combineReducers({
	session: AuthReducer,
	wines: WineReducer
});

export default RootReducer;

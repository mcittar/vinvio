import * as AuthUtil from '../util/auth_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {
	AuthUtil.login(user)
		.then(returned => dispatch(receiveCurrentUser(returned)))
		.fail(errors => dispatch(receiveErrors([errors.responseJSON.error])))
};

export const logout = () => dispatch => {
	AuthUtil.logout()
		.then(() => dispatch(receiveCurrentUser(null)))
};

export const signup = user => dispatch => {
	AuthUtil.signup(user)
		.then(returned => dispatch(receiveCurrentUser(returned)))
		.fail(errors => dispatch(receiveErrors([errors.responseJSON.error])))
}

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const receiveErrors = errors => ({
	type: RECEIVE_ERRORS,
	errors
});
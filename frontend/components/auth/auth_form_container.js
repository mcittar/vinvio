import { connect } from 'react-redux';
import { login, signup } from '../../actions/auth_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => ({
	loggedIn: Boolean(session.currentUser),
	errors: session.errors
})

const mapDispatchToProps = (dispatch, { location }) => {
	const formType = location.pathname.slice(1);
	const processForm = (formType === 'login') ? login : signup;
	return {
		processForm: user => dispatch(processForm(user)),
		formType
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthForm);
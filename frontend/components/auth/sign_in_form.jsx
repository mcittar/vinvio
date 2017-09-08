import React from 'react';
import * as AuthUtil from '../../util/auth_util';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateAttribute(attrib) {
		return e => this.setState({ [attrib]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		console.log(user);
		AuthUtil.login(this.state);
	}

	logout() {
		AuthUtil.logout().then(response => console.log(response)).fail(errors => console.log(errors));
	}

	render() {

		return(
			<div>
				<input value={ this.state.email } onChange={ this.updateAttribute('email') }></input>
				<input value={ this.state.password } onChange={ this.updateAttribute('password') }></input>
				<button onClick={ this.handleSubmit }>Submit</button>
				<button onClick={ this.logout.bind(this) }>Submit</button>
			</div>
		)
	}

}

export default SignIn;
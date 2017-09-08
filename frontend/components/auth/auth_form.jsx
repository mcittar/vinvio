import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
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
		this.props.processForm(this.state);
	}

	navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

	render() {

		return(
			<div className="login-form-container">
        <div>
          Welcome to Vinvio!
          Please { this.props.formType } or { this.navLink() }
          { this.renderErrors() }
        </div>

        <div>
					<input value={ this.state.email } onChange={ this.updateAttribute('email') }></input>
					<input type='password' value={ this.state.password } onChange={ this.updateAttribute('password') }></input>
					<button onClick={ this.handleSubmit }>Submit</button>
				</div>
      </div>

			
		)
	}

}

export default AuthForm;
import { useState } from "react";
import { validateEmail, validatePassword } from '../../utils/validation.js';

export default function Form(props) {
	const [userData, setUserData] = useState({
		email: '',
		password: ''
	});
	const [errors, setErrors] = useState({
		email: '',
		password: ''
	});

	function handleInputChange(event) {
		const validate = event.target.name === 'email' ? validateEmail : validatePassword;
		const error = validate(event.target.value);

		setErrors({
			...errors,
			[event.target.name]: error
		});
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		});
	}

	return (
		<form>
			<label>Email</label>
			<input name='email' onChange={handleInputChange} value={userData.email}></input>
			<span>{errors.email}</span>
			<label>Password</label>
			<input name='password' onChange={handleInputChange} value={userData.password}></input>
			<span>{errors.password}</span>
			<button>Log In</button>
		</form>
	);
}

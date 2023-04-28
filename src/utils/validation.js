export function validateEmail(email) {
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email.length) {
		return 'Email should not be empty';
	}
	if (!emailRegex.test(email)) {
		return 'Enter a valid email';
	}
	if (email.length > 35) {
		return 'Email too long';
	}
	return '';
}

export function validatePassword(pwd) {
	if (!/\d/.test(pwd)) {
		return 'Password should have at least one number';
	}
	if (pwd.length < 6 || pwd.length > 10) {
		return 'Password should have between 6 and 10 characters';
	}
	return '';
}

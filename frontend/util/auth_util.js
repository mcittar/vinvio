export const getMetaContent = name => {
	let metas = document.getElementsByTagName('meta');
	for (let i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute('name') == name) {
			return metas[i].getAttribute('content');
		};
	};
	return ""
}

export const logout = () => {
	return $.ajax({
		method: 'DELETE',
		url: 'users/sign_out',
		data: {
			authenticity_token: getMetaContent("csrf-token")
		}
	})
}

export const login = user => {
	return $.ajax({
		method: 'POST',
		url: 'users/sign_in.json',
		data: {
			user: user,
			authenticity_token: getMetaContent("csrf-token")
		}
	})
}

export const signup = user => {
	return $.ajax({
		method: 'POST',
		url: 'users.json',
		data: {
			user: user,
			authenticity_token: getMetaContent("csrf-token")
		}
	})
}
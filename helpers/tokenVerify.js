const jwt = require('jsonwebtoken');
const {secretT} = require('../constants/tokenSecret');

module.exports = token => {
	if (!token) throw new Error('no token');

	let user;

	jwt.verify(token, secretT, (err, decoded) => {
		if (err) throw new Error('no token');
		user = decoded;
	});

	return user;
};

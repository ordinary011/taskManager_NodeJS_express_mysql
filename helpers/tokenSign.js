const jwt = require('jsonwebtoken');
const {secretT} = require('../constants/tokenSecret');

module.exports = data => jwt.sign(data, secretT, { expiresIn: '1d' });

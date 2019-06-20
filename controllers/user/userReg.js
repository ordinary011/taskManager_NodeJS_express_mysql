const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
	try {
		const UserModel = db.getModel('User');
		const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { name, lastName, email, password, passwordConfirm, gender_id = 3 } = req.body;
		if (!name || !lastName || !email || !password)
			throw new Error('required field was missed during the registration');
		if (password.length < 3)
			throw new Error('sorry the length of the password should be at least 8 characters');
		if (passwordConfirm !== password)
			throw new Error('could not confirm the password try again');
		if(!emailReg.test(email))
			throw new Error('invalid email sorry');
		const insertedUser = await UserModel.create({
			name,
			lastName,
			email,
			password,
			gender_id
		});
		res.status(201).json({
			ok: true,
			msg: insertedUser
		});
	} catch (e) {
		console.log(e);
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
};



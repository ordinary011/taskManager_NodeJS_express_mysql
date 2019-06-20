const db = require('../../dataBase').getInstance();
const tokenSign = require('../../helpers/tokenSign');

module.exports = async (req, res) => {
	try {
        const UserModel = db.getModel('User');
        const {email = '', password = ''} = req.body;
        if(!email || !password) throw new Error('email or password was missed during logging in');
        const isPresent = await UserModel.findOne({
            where: {
                email,
                password
            }
        });
        if(!isPresent) throw new Error('sorry wrong email or password');
        const {id, name} = isPresent;
        const token = tokenSign({id, name})
        res.status(200).json({
			ok: true,
			msg: {token}
		});
	} catch (e) {
        console.log(e);
		res.status(400).json({
			ok: false,
			msg: e.message
		});
    }
};

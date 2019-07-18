const db = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerify')

module.exports = async (req, res) => {
    try {
        const {token} = req.body;

		const verifiedToken = await tokenVerify(token)
		
		res.status(200).json({
			ok: true,
			msg: verifiedToken
		});
	} catch (e) {
		res.status(405).json({
			ok: false,
			msg: e.message
		});
	}
}
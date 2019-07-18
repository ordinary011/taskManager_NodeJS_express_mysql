module.exports = async (req, res) => {
    try {
        
		res.status(200).json({
			ok: true,
			msg: 'ok'
		});
	} catch (e) {
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
}


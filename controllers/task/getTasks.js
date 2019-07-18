const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
	try {
		const UserToTaskModel = db.getModel('UserToTask');
		const TaskModel = db.getModel('Task');
		const userTasks = await UserToTaskModel.findAll({
			attributes: [],
			where: {
				user_id: req.params.uId
			},
			include: [{ model: TaskModel}]
		});
		res.status(200).json({
			ok: true,
			msg: {userTasks}
		});
	} catch (e) {
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
};

const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
		const UserToTaskModel = db.getModel('UserToTask');
		const TaskModel = db.getModel('Task');

		const {user_id, task} = req.body;

		const InsertedTask = await TaskModel.create({
			task
		})
		const task_id = InsertedTask.dataValues.id

		await UserToTaskModel.create({
			user_id,
			task_id
		});

		res.status(200).json({
			ok: true,
			msg: {answer: 'Task was created'}
		});
	} catch (e) {
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
}
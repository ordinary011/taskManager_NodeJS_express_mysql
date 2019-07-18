const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
		const TaskModel = db.getModel('Task');

		const {task_id, task} = req.body;
		
		//? do I need await here?
		await TaskModel.update(
			{task},
			{where: {id: task_id}}
		)

		res.status(200).json({
			ok: true,
			msg: {answer: 'updated'}
		});
	} catch (e) {
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
}
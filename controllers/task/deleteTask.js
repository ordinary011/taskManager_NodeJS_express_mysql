const Sequelize = require('sequelize');
const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
	try {
		const UserToTaskModel = db.getModel('UserToTask');
		const TaskModel = db.getModel('Task');
		const { uId: user_id, tId: task_id } = req.params

		const boundTasks = await UserToTaskModel.findOne({
			where: {
				task_id
			},
			attributes: [[Sequelize.fn('COUNT', Sequelize.col('task_id')), 'task_count']]
		});

		await UserToTaskModel.destroy({
			where: {
				task_id,
				user_id
			}
		});
		
		if(boundTasks.dataValues.task_count < 2){
			await TaskModel.destroy({
				where: {
					id: task_id
				}
			});
		}
			res.status(200).json({
			ok: true,
			msg: {answer: 'deleted'}
		});
	} catch (e) {
		res.status(400).json({
			ok: false,
			msg: e.message
		});
	}
};

module.exports = (sequelize, DataTypes) => {
	const UserToTask = sequelize.define('UserToTask', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignKey: true
		},
		task_id: {
            type: DataTypes.INTEGER,
			allowNull: false,
			foreignKey: true
		}
    },{
        tableName: 'user_to_task',
        timestamps: false
    });

    const Task = sequelize.import('./Task.js')
    const User = sequelize.import('./User.js')
    UserToTask.belongsTo(User, {foreignKey: 'user_id'})
    UserToTask.belongsTo(Task, {foreignKey: 'task_id'})
    return UserToTask
};

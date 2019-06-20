module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		task: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
        tableName: 'task',
        timestamps: false
    });

    return Task
};

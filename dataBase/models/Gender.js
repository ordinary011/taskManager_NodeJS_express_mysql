module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define('Gender', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gender_label: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'gender',
        timestamps: false
    });

    return Gender;
}
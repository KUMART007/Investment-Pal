// eslint-disable-next-line no-shadow
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.PostInfo, {
      as: 'userPostInfo',
      foreignKey: 'userId',
    });
  };

  return User;
};

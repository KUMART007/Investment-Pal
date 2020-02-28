/* eslint-disable */
// eslint-disable-next-line no-shadow
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
  },
    {
      timestamps: false
    });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      as: 'userPost',
      foreignKey: 'userId',
    });
  };
  return User;
};
/* eslint-disable */
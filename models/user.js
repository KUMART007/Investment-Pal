const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const PostInfo = require('./PostInfo');
// eslint-disable-next-line no-unused-vars
const sequelize = require('./index');

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

  User.beforeCreate((user) => {
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null,
    );
  });

  User.prototype.validPassword = function pass(password) {
    return bcrypt.compareSync(this.password, password);
  };

  User.associate = (models) => {
    User.hasMany(models.PostInfo, {
      as: 'userPostInfo',
      foreignKey: 'userId',
    });
  };

  return User;
};

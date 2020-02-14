// eslint-disable-next-line no-shadow
module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line no-shadow
  const PostInfo = sequelize.define('PostInfo', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  PostInfo.associate = (models) => {
    PostInfo.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return PostInfo;
};

/* eslint-disable */
// eslint-disable-next-line no-shadow
module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line no-shadow
  const Post = sequelize.define('Post', {
    pid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    user_name: {
      type: DataTypes.STRING,
    },
    like_user_id: {
      type: DataTypes.INTEGER,
    },
    likes: {
      type: DataTypes.INTEGER,
      DEFAULT: 0
    },
  },
  {
    timestamps: false
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Post;
};

/* eslint-disable */
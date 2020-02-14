// eslint-disable-next-line no-shadow
module.exports = (sequelize, DataTypes) => {
  const Headline = sequelize.define('Headline', {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Headline;
};

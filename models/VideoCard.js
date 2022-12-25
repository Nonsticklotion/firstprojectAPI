module.exports = (sequelize, DataTypes) => {
  const VideoCard = sequelize.define(
    "VideoCard",
    {
      tdp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );
  return VideoCard;
};

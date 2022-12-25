module.exports = (sequelize, DataTypes) => {
  const StorageType = sequelize.define("StorageType", {
    storage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return StorageType
};

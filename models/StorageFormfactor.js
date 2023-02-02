module.exports = (sequelize, DataTypes) => {
  const StorageFormfactor = sequelize.define("StorageFormfactor", {
    StorageForm: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return StorageFormfactor
};

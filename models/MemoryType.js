module.exports = (sequelize, DataTypes) => {
  const MemoryType = sequelize.define("MemoryType", {
    memoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return MemoryType;
};

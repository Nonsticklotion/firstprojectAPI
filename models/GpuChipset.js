module.exports = (sequelize, DataTypes) => {
  const GpuChipset = sequelize.define("GpuChipset", {
    chipsetName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return GpuChipset;
};

module.exports = (sequelize, DataTypes) => {
  const CpuCooler = sequelize.define("CpuCooler", {
    waterCooler: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
    },
    tdp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return CpuCooler;
};

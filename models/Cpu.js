module.exports = (sequelize, DataTypes) => {
  const Cpu = sequelize.define("Cpu", {
    seriesName: {
      type: DataTypes.STRING,
      allowNull: false,
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
  return Cpu;
};

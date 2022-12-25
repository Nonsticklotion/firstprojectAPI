module.exports = (sequelize, DataTypes) => {
  const Motherboard = sequelize.define("Motherboard", {
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
  return Motherboard;
};

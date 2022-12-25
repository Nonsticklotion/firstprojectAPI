module.exports = (sequelize, DataTypes) => {
  const PowerSupply = sequelize.define("PowerSupply", {
    wattage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return PowerSupply;
};

module.exports = (sequelize, DataTypes) => {
  const Efficiency = sequelize.define("Efficiency", {
    efficiencyRating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return Efficiency;
};

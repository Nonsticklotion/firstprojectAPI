module.exports = (sequelize, Datatypes) => {
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

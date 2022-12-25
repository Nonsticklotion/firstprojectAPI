module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define("Case", {
    powersupply: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return Case;
};

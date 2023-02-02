module.exports = (sequelize, DataTypes) => {
  const MbChipset = sequelize.define("MbChipset", {
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
  return MbChipset;
};

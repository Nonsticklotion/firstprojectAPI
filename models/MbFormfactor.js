module.exports = (sequelize, DataTypes) => {
  const MbFormfactor = sequelize.define("MbFormfactor", {
    formfactorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return MbFormfactor;
};

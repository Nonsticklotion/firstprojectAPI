module.exports = (sequelize, DataTypes) => {
  const CaseType = sequelize.define(
    "CaseType",
    {
      typeName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );
  return CaseType;
};

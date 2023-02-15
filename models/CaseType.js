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
  CaseType.associate = (models) => {
    CaseType.hasMany(models.Case, {
      foreignKey: {
        name: "casetype_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return CaseType;
};

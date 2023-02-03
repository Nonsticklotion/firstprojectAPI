module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define(
    "Case",
    {
      powersupply: {
        type: DataTypes.BOOLEAN,
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

  Case.associate = (models) => {
    Case.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: "manufac_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Case.belongsTo(models.MbFormFactor, {
      foreignKey: {
        name: "formfactor_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Case.belongsTo(models.CaseType, {
      foreignKey: {
        name: "type_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Case;
};

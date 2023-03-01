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
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Case.belongsTo(models.MbFormfactor, {
      foreignKey: {
        name: "mb_formfactor_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Case.belongsTo(models.CaseType,{
      foreignKey:{
        name: "casetype_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    })

    Case.hasOne(models.Product, {
      foreignKey: {
        name: "case_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Case;
};

module.exports = (sequelize, DataTypes) => {
  const PowerSupply = sequelize.define(
    "PowerSupply",
    {
      wattage: {
        type: DataTypes.INTEGER,
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
  PowerSupply.associate = (models) => {
    PowerSupply.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: "manufac_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    PowerSupply.belongsTo(models.Efficiency, {
      foreignKey: {
        name: "efficiency_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    PowerSupply.hasOne(models.Product, {
      foreignKey: {
        name: "powesupply_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return PowerSupply;
};

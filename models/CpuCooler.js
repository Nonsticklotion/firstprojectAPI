module.exports = (sequelize, DataTypes) => {
  const CpuCooler = sequelize.define(
    "CpuCooler",
    {
      waterCooler: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: true,
        },
      },
      tdp: {
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
  CpuCooler.associate = (models) => {
    CpuCooler.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: "manufac_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    CpuCooler.belongsTo(models.CpuSocket, {
      foreignKey: {
        name: "socket_name_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    CpuCooler.hasOne(models.Product, {
      foreignKey: {
        name: "cpu_cooler_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return CpuCooler;
};

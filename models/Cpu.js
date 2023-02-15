module.exports = (sequelize, DataTypes) => {
  const Cpu = sequelize.define(
    "Cpu",
    {
      seriesName: {
        type: DataTypes.STRING,
        allowNull: false,
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
  Cpu.associate = (models) => {
    Cpu.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: "manufac_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Cpu.belongsTo(models.CpuSocket, {
      foreignKey: {
        name: "socket_name_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Cpu.hasOne(models.Product, {
      foreignKey: {
        name: "cpu_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Cpu;
};

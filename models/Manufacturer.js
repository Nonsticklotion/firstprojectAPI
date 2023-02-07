module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define(
    "Manufacturer",
    {
      manufacName: {
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
  Manufacturer.associate = (models) => {
    Manufacturer.hasMany(models.Cpu, {
      foreignKey: {
        name: "cpu_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.CpuCooler, {
      foreignKey: {
        name: "cpucooler_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Motherboard, {
      foreignKey: {
        name: "motherboard_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.VideoCard, {
      foreignKey: {
        name: "videocard_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Memory, {
      foreignKey: {
        name: "memory_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Storage, {
      foreignKey: {
        name: "storage_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Case, {
      foreignKey: {
        name: "case_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.PowerSupply, {
      foreignKey: {
        name: "powersupply_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Manufacturer;
};

module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define(
    "Manufacturer",
    {
      manufacName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
          
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
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.CpuCooler, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Motherboard, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.VideoCard, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Memory, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Storage, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.Case, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Manufacturer.hasMany(models.PowerSupply, {
      foreignKey: {
        name: "manufacid",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Manufacturer;
};

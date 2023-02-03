module.exports = (sequelize, DataTypes) => {
  const Motherboard = sequelize.define("Motherboard", {
    tdp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  Motherboard.associate = models => {
    Motherboard.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: 'manufac_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.belongsTo(models.CpuSocket, {
      foreignKey: {
        name: 'socket_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.belongsTo(models.MbChipset, {
      foreignKey: {
        name: 'chipset_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
    Motherboard.belongsTo(models.MbFormfactor, {
      foreignKey: {
        name: 'formfactor_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
    Motherboard.belongsTo(models.MemoryType, {
      foreignKey: {
        name: 'memory_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.belongsTo(models.Product, {
      foreignKey: {
        name: "motherboard_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Motherboard;
};

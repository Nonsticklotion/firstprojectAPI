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
        name: 'manufacid',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.belongsTo(models.CpuSocket, {
      foreignKey: {
        name: 'socket_name_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.belongsTo(models.MbChipset, {
      foreignKey: {
        name: 'mb_chipset_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
    Motherboard.belongsTo(models.MbFormfactor, {
      foreignKey: {
        name: 'mb_formfactor_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
    Motherboard.belongsTo(models.MemoryType, {
      foreignKey: {
        name: 'memorytype_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Motherboard.hasOne(models.Product, {
      foreignKey: {
        name: "motherboard_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Motherboard;
};

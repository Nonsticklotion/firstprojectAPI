module.exports = (sequelize, DataTypes) => {
  const Memory = sequelize.define("Memory", {
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
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
  },{
    underscored: true,
  });
  Memory.associate = models => {
    Memory.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: 'manufac_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Memory.belongsTo(models.MemoryType, {
      foreignKey: {
        name: 'memory_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };
  return Memory;
};

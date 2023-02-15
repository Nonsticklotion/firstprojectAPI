module.exports = (sequelize, DataTypes) => {
  const Storage = sequelize.define("Storage", {
    capacity: {
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
  Storage.associate = models => {
    Storage.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: 'manufac_name',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Storage.belongsTo(models.StorageType, {
      foreignKey: {
        name: 'storage_type_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Storage.belongsTo(models.StorageFormfactor, {
      foreignKey: {
        name: 'storage_formfactor_id',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Storage.hasOne(models.Product, {
      foreignKey: {
        name: "storage_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Storage;
};

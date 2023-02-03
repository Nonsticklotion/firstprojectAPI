module.exports = (sequelize, DataTypes) => {
  const StorageType = sequelize.define("StorageType", {
    storage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  StorageType.associate = models => {
    StorageType.hasMany(models.Storage,{
    foreignKey:{
      name: 'storage_type_id',
      allowNull: false
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  });
}
  return StorageType
};

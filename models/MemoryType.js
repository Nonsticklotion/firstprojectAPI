module.exports = (sequelize, DataTypes) => {
  const MemoryType = sequelize.define("MemoryType", {
    memoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
        
      },
    },
  },{
    underscored: true,
  });

  MemoryType.associate = models => {
    MemoryType.hasMany(models.Motherboard,{
    foreignKey:{
      name: 'memorytype_id',
      allowNull: false
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  });
  MemoryType.hasMany(models.Memory,{
    foreignKey:{
      name: 'memorytype_id',
      allowNull: false
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  });
}
  return MemoryType;
};

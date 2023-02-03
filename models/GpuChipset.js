module.exports = (sequelize, DataTypes) => {
  const GpuChipset = sequelize.define("GpuChipset", {
    chipsetName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  GpuChipset.associate = models => {
    GpuChipset.hasMany(models.VideoCard,{
    foreignKey:{
      name: 'gpu_chipset_id',
      allowNull: false
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  });
}
  return GpuChipset;
};

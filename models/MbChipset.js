module.exports = (sequelize, DataTypes) => {
  const MbChipset = sequelize.define("MbChipset", {
    chipsetName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
       
      },
    },
  },{
    underscored: true,
  });

  MbChipset.associate = models => {
  MbChipset.hasMany(models.Motherboard,{
    foreignKey:{
      name: 'mb_chipset_id',
      allowNull: false
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  });
}
  return MbChipset;
};

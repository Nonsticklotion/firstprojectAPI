module.exports = (sequelize, DataTypes) => {
  const StorageFormfactor = sequelize.define(
    "StorageFormfactor",
    {
      StorageForm: {
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

  StorageFormfactor.associate = (models) => {
    StorageFormfactor.hasMany(models.Storage, {
      foreignKey: {
        name: "storage_formfactor_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return StorageFormfactor;
};

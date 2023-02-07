module.exports = (sequelize, DataTypes) => {
  const MbFormfactor = sequelize.define(
    "MbFormfactor",
    {
      formfactorName: {
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
  MbFormfactor.associate = (models) => {
    MbFormfactor.hasMany(models.Motherboard, {
      foreignKey: {
        name: "mb_formfactor_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    MbFormfactor.hasMany(models.Case, {
      foreignKey: {
        name: "mb_formfactor_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return MbFormfactor;
};

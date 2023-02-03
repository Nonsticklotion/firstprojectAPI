module.exports = (sequelize, DataTypes) => {
  const Efficiency = sequelize.define(
    "Efficiency",
    {
      efficiencyRating: {
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
  Efficiency.associate = (models) => {
    Efficiency.hasMany(models.PowerSupply, {
      foreignKey: {
        name: "efficiency_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Efficiency;
};

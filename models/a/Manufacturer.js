module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define(
    "Manufacturer",
    {
      manufacName: {
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
  return Manufacturer;
};

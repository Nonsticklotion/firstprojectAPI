module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      picture_money: {
        type: DataTypes.STRING,
        defaultValue: "Please upload your script",
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      underscored: true,
    }
  );
  return Order;
};

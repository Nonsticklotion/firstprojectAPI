module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      amount: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      totalPrice: DataTypes.INTEGER,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      underscored: true,
    }
  );
  return OrderItem;
};

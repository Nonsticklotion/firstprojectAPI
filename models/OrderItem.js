module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    amount: {
      type: DataTypes.INTEGER,
      DefaultValue: 0,
    },
    totalPrice: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },{
    underscored: true,
  });
  return OrderItem;
};

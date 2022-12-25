module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    moneyPic: DataTypes.STRING,
    priceBfTax: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
  },{
    underscored: true,
  });
  return Order;
};

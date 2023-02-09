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

  Order.associate = (models) => {
    Order.hasMany(models.OrderItem, {
      foreignKey: {
        name: "order_item_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  }
  return Order;
};

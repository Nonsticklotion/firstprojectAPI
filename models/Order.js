module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      picture_money: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      all_money: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    }
  );

  Order.associate = (models) => {
    Order.hasMany(models.OrderItem, {
      foreignKey: {
        name: "order_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Order;
};

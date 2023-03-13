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
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      underscored: true,
    }
  );
  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Product, {
      foreignKey: {
        name: "product_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    OrderItem.belongsTo(models.Order, {
      foreignKey: {
        name: "order_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    OrderItem.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: true,
        defaultValue: null,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return OrderItem;
};

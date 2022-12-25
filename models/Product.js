module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountLeft: {
      type: DataTypes.INTEGER,
      DefaultValue: 0,
    },
    price: DataTypes.FLOAT,
    picture: DataTypes.STRING,
  },{
    underscored: true,
  });
  return Product;
};

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amountLeft: {
        type: DataTypes.INTEGER,
        DefaultValue: 0,
      },
      price: DataTypes.FLOAT,
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Product.associate = (models) => {
    Product.hasOne(models.Cpu, {
      foreignKey: {
        name: "cpu_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.CpuCooler, {
      foreignKey: {
        name: "cpu_cooler_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.Motherboard, {
      foreignKey: {
        name: "motherboard_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.VideoCard, {
      foreignKey: {
        name: "videocard_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.Memory, {
      foreignKey: {
        name: "memory_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.Storage, {
      foreignKey: {
        name: "storage_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.Case, {
      foreignKey: {
        name: "case_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    Product.hasOne(models.PowerSupply, {
      foreignKey: {
        name: "powersupply_id",
        allowNull:true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
    
    Product.hasMany(models.OrderItem, {
      foreignKey: {
        name: "product_id",
        allowNull: true,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };

  return Product;
};

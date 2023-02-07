  module.exports = (sequelize, DataTypes) => {
    const UserAddress = sequelize.define(
      "UserAddress",
      {
        add1: {
          type: DataTypes.STRING,
        },
        add2: {
          type: DataTypes.STRING,
        },
        province: {
          type: DataTypes.STRING,
        },
        district: {
          type: DataTypes.STRING,
        },
        postalCode: {
          type: DataTypes.STRING,
          validate: {
            isNumeric: true,
          },
        },
      },
      {
        undersocred: true,
      }
    );
  
    UserAddress.associate = (models) => {
      UserAddress.belongsTo(models.User, {
        foreignKey: {
          name: "user_address_id",
          allowNull: false,
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      });
    }
    return UserAddress;
  };


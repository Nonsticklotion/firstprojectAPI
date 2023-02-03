module.exports = (sequelize, DataTypes) => {
  const CpuSocket = sequelize.define(
    "CpuSocket",
    {
      socketName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );
  CpuSocket.associate = (models) => {
    CpuSocket.hasMany(models.Cpu, {
      foreignKey: {
        name: "socket_name_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    CpuSocket.hasMany(models.CpuCooler, {
      foreignKey: {
        name: "socket_name_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    CpuSocket.hasMany(models.Motherboard, {
      foreignKey: {
        name: "socket_name_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return CpuSocket;
};

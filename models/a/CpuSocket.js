module.exports = (sequelize, DataTypes) => {
  const CpuSocket = sequelize.define("CpuSocket", {
    socketName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{
    underscored: true,
  });
  return CpuSocket;
};

module.exports = (sequelize, DataTypes) => {
  const VideoCard = sequelize.define(
    "VideoCard",
    {
      tdp: {
        type: DataTypes.INTEGER,
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
  VideoCard.associate = (models) => {
    VideoCard.belongsTo(models.Manufacturer, {
      foreignKey: {
        name: "manufac_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    VideoCard.belongsTo(models.GpuChipset, {
      foreignKey: {
        name: "chipset_name",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
 
    VideoCard.hasOne(models.Product, {
      foreignKey: {
        name: "video_card_id",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return VideoCard;
};

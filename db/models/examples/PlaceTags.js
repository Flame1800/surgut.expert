const Tag = require("./Tag");
const Place = require("./Place");

module.exports = (sequelize, DataTypes) => {
  const PlaceTags = sequelize.define(
    'PlaceTags',
    {
      placeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: Tag, 
          key: 'id'
        }
      },
    },
  );

  return PlaceTags;
};

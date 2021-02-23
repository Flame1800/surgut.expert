const Category = require("./Category");
const Place = require("./Place");

module.exports = (sequelize, DataTypes) => {
  const PlaceCategory = sequelize.define(
    'PlaceCategory',
    {
      placeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: Category, 
          key: 'id'
        }
      },
    },
  );

  return PlaceCategory;
};

const Category = require("./Category");
const User = require("./User");
const Feedback = require("./Feedback");
const Party = require("./Party");
const Picture = require("./Picture");
const Tag = require("./Tag");


module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    'Place',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      location: DataTypes.STRING,
      services: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
      tel: DataTypes.STRING,
      site: DataTypes.STRING,
      abb_name: DataTypes.STRING
    },
  );

  Place.hasMany(Feedback,  { foreignKey: 'placeId' });
  Place.hasMany(Party,  { foreignKey: 'placeId' });
  Place.hasMany(Picture,  { foreignKey: 'placeId' });
  Place.belongsToMany(Category, { through: PlaceCategories });
  Place.belongsToMany(Tag, { through: PlaceTags });
  Place.belongsToMany(User, { through: Like });  

  return Place;
};




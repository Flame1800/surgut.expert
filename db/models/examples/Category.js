const Place = require("./Place");
const Tag = require("./Tag");
const PlaceCategory = require("./PlaceCategory");

module.exports = (sequelize, DataTypes) => {
const Category = sequelize.define(
  'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      icon: DataTypes.STRING
    },
  );

  // Category.belongsToMany(Place, { through: PlaceCategory });
  // Category.hasMany(Tag, { foreignKey: 'categoryId' });

  return Category;
};

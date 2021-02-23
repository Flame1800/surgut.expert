const Category = require("./Category");
const Place = require("./Place");

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
    },
  );

  // Tag.belongsToMany(Place, { through: PlaceTags } );
  // Tag.belongsTo(Category);
  return Tag;
};

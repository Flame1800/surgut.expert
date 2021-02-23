const Place = require("./Place");

module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    'Image',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      href: DataTypes.STRING,
      description: DataTypes.TEXT,
      placeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
    },
  );

  // Picture.belongsTo(Place);
  
  return Picture;
};
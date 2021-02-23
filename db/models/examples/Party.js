const Place = require("./Place");

module.exports = (sequelize, DataTypes) => {
  const Party = sequelize.define(
    'Party',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      date: DataTypes.DATE,
      placeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
    },
  );

  // Party.belongsTo(Place);
  
  return Party;
};
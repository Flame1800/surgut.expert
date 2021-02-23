const Place = require("./Place");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define(
    'Feedback',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      feedback: DataTypes.TEXT,
      rate: DataTypes.FLOAT,
      placeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Place, 
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User, 
          key: 'id'
        }
      },
    },
  );

  // Feedback.belongsTo(User);
  // Feedback.belongsTo(Place);

  return Feedback;
};

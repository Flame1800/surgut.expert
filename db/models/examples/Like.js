'use strict';

const Place = require("./Place");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    'Like',
    {
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

  return Like;
};

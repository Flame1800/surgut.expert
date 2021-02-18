'use strict';
module.exports = (sequelize, DataTypes) => {
  const places = sequelize.define(
    'places',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      location: DataTypes.STRING,
      services: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
    },
  );
  return places;
};




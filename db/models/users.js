'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async function(user, options) {
          // Do stuff
          user.password = await bcrypt.hashSync(user.password, 10);
        },
      },
    },
  );
  return users;
};

var bcrypt = require('bcryptjs');

const Feedback = require("./Feedback");
const Place = require("./Place");


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: DataTypes.STRING,
      phone: DataTypes.STRING
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

  // User.hasMany(Feedback, { foreignKey: 'userId' });
  // User.belongsToMany(Place, { through: Like });  

  return User;
};

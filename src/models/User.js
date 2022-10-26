const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTERGER,
    displayName: DataTypes.VARCHAR,
    email: DataTypes.VARCHAR,
    password: DataTypes.VARCHAR,
    image: DataTypes.VARCHAR,
  });

  return User;
}

module.exports = userModel;
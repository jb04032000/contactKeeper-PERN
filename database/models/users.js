module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Contacts, {
      foreignKey: "user",
      as: "contacts",
      onDelete: "CASCADE",
    });
  };
  return User;
};

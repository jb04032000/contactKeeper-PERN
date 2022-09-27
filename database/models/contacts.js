module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define(
    "Contacts",
    {
      user: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      type: {
        type: DataTypes.STRING,
        defaultValue: "Personal",
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {}
  );
  Contacts.associate = function (models) {
    // associations can be defined here
    Contacts.belongsTo(models.User, {
      foreignKey: "user",
      as: "users",
      onDelete: "CASCADE",
    });
  };
  return Contacts;
};

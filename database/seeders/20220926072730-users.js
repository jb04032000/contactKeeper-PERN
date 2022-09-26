module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Dummy Name 1",
          email: "test1@test.test",
          password: "qwert@1234",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dummy Name 2",
          email: "test2@test.test",
          password: "qwert@1234",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
};

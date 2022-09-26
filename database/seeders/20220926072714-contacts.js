module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Contacts",
      [
        {
          id: 1,
          name: "Dummy Name 1",
          email: "test1@test.test",
          user: 1,
          phone: "7898789789",
          type: "Personal",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Dummy Name 2",
          email: "test2@test.test",
          user: 2,
          phone: "7898789788",
          type: "Personal",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Contacts", null, {}),
};

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'carts',
      [
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('carts', null, {})
  }
}

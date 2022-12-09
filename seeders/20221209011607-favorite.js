'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'favorites',
      [
        {
          userId: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('favorites', null, {})
  }
}

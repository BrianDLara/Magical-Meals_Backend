'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          comment: 'My kids loved them, everyone should give them a try',
          userId: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'My kids loved them, everyone should give them a try',
          userId: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment:
            "I've always wondered what the gray stuff tasted like. This met my expectations",
          userId: 2,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment:
            "I've always wanted to know how to make ratatouille since I watched the movie. After making it, I now for a fact that the movie deserved that title! XD",
          userId: 3,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'I made them for my kids birthday party. They were a hit!',
          userId: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment:
            "It looked weird but it's the oreos that give it a greyish color, but it was fun to make :)  ",
          userId: 5,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment:
            "I loved it! You can get a hand shaver on amazon. It's better than buying a machine, cheaper, and more compact. You just have to put in the elbow grease",
          userId: 2,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {})
  }
}

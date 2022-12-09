'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'items',
      [
        {
          name: 'Private Selection® Dark Sweet Cherries',
          price: '$5.29',
          image: 'https://i.imgur.com/vwAVddF.jpg',
          upc: '0001111087813',
          recipeId: 1,
          cartId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dixie Crystals Granulated Extra Fine Sugar',
          price: '$3.99',
          image: 'https://i.imgur.com/ooG7lns.png',
          upc: '0001620033700',
          recipeId: 1,
          cartId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Lemons',
          price: '$0.99',
          image: 'https://i.imgur.com/x0tCtfQ.jpg',
          upc: '0000000004053',
          recipeId: 1,
          cartId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'ReaLemon 100% Lemon Juice',
          price: '$2.39',
          image: 'https://i.imgur.com/DTZFbMW.jpg',
          upc: '0000000004053',
          recipeId: 1,
          cartId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {})
  }
}

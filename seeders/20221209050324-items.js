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
        },
        {
          name: 'Jell-O Vanilla Instant Pudding & Pie Filling Mix',
          price: '$1.59',
          image: 'https://i.imgur.com/Biefaze.jpg',
          upc: '0004300020433',
          recipeId: 2,
          cartId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Oreo Chocolate Sandwich Cookies',
          price: '$3.49',
          image: 'https://i.imgur.com/AJlWbQt.jpg',
          upc: '0004400003202',
          recipeId: 2,
          cartId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cool Whip Original Whipped Cream Topping',
          price: '$2.59',
          image: 'https://i.imgur.com/vqgYok1.jpg',
          upc: '0004300000953',
          recipeId: 2,
          cartId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jell-O Chocolate Instant Pudding & Pie Filling Mix',
          price: '$1.59',
          image: 'https://i.imgur.com/FiCGIPk.jpg',
          upc: '0004300020431',
          recipeId: 2,
          cartId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wilton Metallic Sprinkles',
          price: '$6.49',
          image: 'https://i.imgur.com/xiQBATw.jpg',
          upc: '0007089610627',
          recipeId: 2,
          cartId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kroger® Petite Diced Tomatoes in Tomato Juice',
          price: '$1.00',
          image: 'https://i.imgur.com/IfuGl3e.jpg',
          upc: '0001111081018',
          recipeId: 3,
          cartId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sweet Onions',
          price: '$1.39',
          image: 'https://i.imgur.com/IwCVO7Z.jpg',
          upc: '0000000004166',
          recipeId: 3,
          cartId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kroger® Peeled Garlic',
          price: '$2.50',
          image: 'https://i.imgur.com/3y5lqmX.jpg',
          upc: '0000000004166',
          recipeId: 3,
          cartId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kroger® Peeled Garlic',
          price: '$2.50',
          image: 'https://i.imgur.com/3y5lqmX.jpg',
          upc: '0000000004166',
          recipeId: 3,
          cartId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bertolli Rich Taste Extra Virgin Olive Oil',
          price: '$5.49',
          image: 'https://i.imgur.com/GpQQIYq.jpg',
          upc: '0004179000160',
          recipeId: 3,
          cartId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eggplant',
          price: '$1.69',
          image: 'https://i.imgur.com/svJ1pIa.jpg',
          upc: '0000000004081',
          recipeId: 3,
          cartId: 3,
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

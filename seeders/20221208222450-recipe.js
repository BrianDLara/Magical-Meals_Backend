'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'recipes',
      [
        {
          name: 'Insanely - Good Zootopia Pawpsicles',
          description:
            'This colorful Zootopia Pawpsicles will totally drive you crazy. No matter how old you are, these pawpsicles are just too cute to say "no", and you know what is even more exciting about them? That you can make them at home now!',
          directions: [
            '1. Combine all ingredients in a blender and blend until smooth.',
            '2. Strain the mixture to remove cherry skins.',
            '3. Pour into molds and then place a popsicle stick through the bottom of each mold.',
            '4. Freeze for 4 to 24 hours or until firm.',
            '5. Remove the popsicle from the mold.'
          ],
          image: 'https://i.imgur.com/8scmgAL.jpg',
          prep: '15 mins',
          cook: '24 hrs',
          yield: '4 servings',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Grey Stuff',
          description:
            'The best dessert you can find in Beauty and the Beast is the gray stuff. It is soft, tender, aromatic and delicious. The color looks gray due to the mixture of vanilla, milk, chocolate, and oreos. These are the directions that help you to finish the dessert effortlessly.',
          directions: [
            '1. In a medium bowl, combine pudding mix and milk. Whisk well and refrigerate for 10 minutes.',
            '2. Place Oreos in a food processor and blend until they become crumbs.',
            '3. Mix the crushed Oreos in with the pudding mixture and mix well.',
            '4. Fold in Cool Whip and chocolate pudding mix until well combined and refrigerate for one hour before serving.',
            '5. When ready to serve, place the grey stuff in a piping bag and add a dollop to the middle and then pipe a spiral around it. Top with sprinkles.'
          ],
          image: 'https://i.imgur.com/U4dctQN.jpg',
          prep: '10 mins',
          cook: '10 mins',
          yield: '4 servings',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ratatouille',
          description:
            'Ratatouille is a dish which is cooked by the character Remy in the disney movie Ratatouille. This dish is well-known for being nutrition-rich, eye-catching and awesome. With just a few steps and simple ingredients, you can impress pthers with this delicious DIY ratatouille.',
          directions: [
            '1. Preheat the oven to 375 degrees F (190 degrees C).',
            '2. Spread tomato paste into the bottom of a 10x10 inch baking dish. Sprinkle with onion and garlic and stir in 1 tablespoon of olive oil and water until thoroughly combined. Season with salt and black pepper.',
            '3. Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap the slices a little to display the colors. Drizzle the vegetables with 3 tablespoons olive oil and season with salt and black pepper.',
            '4. Sprinkle with thyme leaves and cover  the vegetables with a piece of parchment paper cut to fit inside.',
            '5. Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese.'
          ],
          image: 'https://i.imgur.com/9xdWwJf.jpg',
          prep: '45 mins',
          cook: '45 mins',
          yield: '4 servings',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Monster Yellow Snow Cones',
          description:
            'If you are a fan of Pixar, you will recognize that the cones are served in the movie Monsters Inc. The enjoyable shade of the dish causes a hilarious situation in which the Yeti has to explain "No, no, no, do not worry. Its lemon." The process of making these snow cones is pretty simple and straightforward. For those who have kids, this dish is highly recommended.',
          directions: [
            '1. Simmer lemon juice, sugar, corn syrup and water over medium heat and whisk until well combined.',
            '2. Remove from heat and add yellow food coloring until the syrup is a lemon color. Allow the syrup to cool completely.',
            '3. Use a snow cone machine to make shaved ice. Pour the lemon syrup into a large bowl of shaved ice and mix well with a rubber spatula.',
            '4. Scoop the lemon shaved ice into snow cone cups and then drizzle a little more syrup over the top.'
          ],
          image: 'https://i.imgur.com/KnDILf5.jpg',
          prep: '15 mins',
          cook: '20 mins',
          yield: '6 servings',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('recipes', null, {})
  }
}

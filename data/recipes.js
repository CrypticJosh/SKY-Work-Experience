
// recipes.js

let recipes = [
  {
    id: '1',
    title: 'Chocolate Chip Cookies',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/chocolate_chip_cookies.jpg'),
    dietaryRequirements: ['vegetarian', 'gluten-free'],
  },
  {
    id: '2',
    title: 'Caprese Salad',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/caprese_salad.jpg'),
    dietaryRequirements: ['vegetarian', 'gluten-free'],
  },
  {
    id: '3',
    title: 'Guacamole',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/guacamole.jpg'),
    dietaryRequirements: ['vegetarian', 'vegan', 'gluten-free'],
  },
  {
    id: '4',
    title: 'Spaghetti Carbonara',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/spaghetti_carbonara.jpg'),
    dietaryRequirements: [],
  },
  {
    id: '5',
    title: 'Caesar Salad',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/caeser_salad.jpg'),
    dietaryRequirements: ['vegetarian'],
  },
  {
    id: '6',
    title: 'Chicken Curry',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/chicken_curry.jpg'),
    dietaryRequirements: [],
  },
  {
    id: '7',
    title: 'Beef Tacos',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/beef_tacos.jpg'),
    dietaryRequirements: [],
  },
  {
    id: '8',
    title: 'Pancakes',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/pancake.jpg'),
    dietaryRequirements: ['vegetarian'],
  },
  {
    id: '9',
    title: 'Apple Pie',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/apple_pie.jpg'),
    dietaryRequirements: ['vegetarian'],
  },
  {
    id: '10',
    title: 'Margarita Pizza',
    ingredients: 'Lorem ipsum',
    instructions: '1. Foo \n2. Bar',
    image: require('../assets/margharita_pizza.jpg'),
    dietaryRequirements: ['vegetarian'],
  },
  {
  id: '11',
  title: 'Chicken Fajitas',
  ingredients: '2 chicken breasts, finely sliced\n1 red onion, finely sliced\n1 red pepper, sliced\n1 red   chilli, finely sliced (optional)\nFor the marinade\n1 tbsp smoked paprika\n1 tbsp ground coriander\nground cumin\n2 garlic clove, crushed\n4 tbsp olive oil\n1 lime juiced\nTabasco\nTo serve\n8 tortillas\nmixed salad\n230g fresh salsa',
  instructions: '\nSTEP 1:\nHeat oven to 200C/180C fan/gas 6 and wrap 8 medium tortillas in foil.\nSTEP 2:\nMix 1 heaped tbsp smoked paprika, 1 tbsp ground coriander, a pinch of ground cumin, 2 crushed garlic cloves, 4 tbsp olive oil, the juice of 1 lime and 4-5 drops Tabasco together in a bowl with a big pinch each of salt and pepper.\nSTEP 3:\nStir 2 finely sliced chicken breasts, 1 finely sliced red onion, 1 sliced red pepper and 1 finely sliced red chilli, if using, into the marinade.\nSTEP 4:\nHeat a griddle pan until smoking hot and add the chicken and marinade to the pan.\nSTEP 5\nKeep everything moving over a high heat for about 5 mins using tongs until you get a nice charred effect. If your griddle pan is small you may need to do this in two batches.\nSTEP 6:\nTo check the chicken is cooked, find the thickest part and tear in half – if any part is still raw cook until done.\nSTEP 7:\nPut the tortillas in the oven to heat up and serve with the cooked chicken, a bag of mixed salad and one 230g tub of fresh salsa.',
  image: require('../assets/chicken_fajitas.jpg'),
  dietaryRequirements: ['vegetarian'],
  },
  {
  id: '12',
  title: 'Cupcakes',
  ingredients: '110g softened butter\n110g golden caster sugar\n2 large eggs\n½ tsp vanilla extract\n110g self-raising flour\nFor the buttercream\n150g softened butter\n300g icing sugar\n1 tsp vanilla extract\n3 tbsp milk\nfood colouring paste of your choice (optional)',
  instructions: 'STEP 1: \nHeat oven to 180C/160C fan/gas 4 and fill a 12 cupcake tray with cases.\nSTEP 2: Using an electric whisk beat 110g softened butter and 110g golden caster sugar together until pale and fluffy then whisk in 2 large eggs, one at a time, scraping down the sides of the bowl after each addition.\nSTEP 3: Add ½ tsp vanilla extract, 110g self-raising flour and a pinch of salt, whisk until just combined then spoon the mixture into the cupcake cases.\nSTEP 4: Bake for 15 mins until golden brown and a skewer inserted into the middle of each cake comes out clean. Leave to cool completely on a wire rack.\nSTEP 5 To make the buttercream, whisk 150g softened butter until super soft then add 300g icing sugar, 1 tsp vanilla extract and a pinch of salt.\nSTEP 6: Whisk together until smooth (start off slowly to avoid an icing sugar cloud) then beat in 3 tbsp milk.\nSTEP 7:\nIf wanting to colour, stir in the food colouring now. Spoon or pipe onto the cooled cupcakes.',
  image: require('../assets/cupcakes.jpg'),
  dietaryRequirements: [],
  },
  {
  id: '13',
  title: 'Vegan Cupcakes',
  ingredients: '1 tablespoon apple cider vinegar\n1 ½ cups almond milk\n2 cups all-purpose flour\n1 cup white sugar\n2 teaspoons baking powder\n½ teaspoon baking soda\n½ teaspoon salt\n½ cup coconut oil, warmed until liquid\n1 ¼ teaspoons vanilla extract',
  instructions: 'STEP 1:\nGather the ingredients. Preheat the oven to 350 degrees F (175 degrees C). Grease two 12-cup muffin pans or line with 18 paper baking cups. \nSTEP 2:\nPour apple cider vinegar into a 2-cup measuring cup. Fill with almond milk to make 1 1/2 cups. Let stand until curdled, about 5 minutes. \nSTEP 3:\nWhisk together flour, sugar, baking powder, baking soda, and salt in a large bowl. Whisk together almond milk mixture, coconut oil, and vanilla in a separate bowl. Pour wet ingredients into dry ingredients and stir just until blended. Spoon batter evenly into the prepared cups. \nSTEP 4:\nBake in the preheated oven until tops spring back when lightly pressed, 15 to 20 minutes. Cool in the pan set over a wire rack. \nSTEP 5:\nArrange cooled cupcakes on a serving platter. Frost with desired frosting.',
  image: require('../assets/vegan_cupcakes.jpg'),
  dietaryRequirements: ['vegan','vegetarian'],
  }
];

export const getRecipes = () => recipes;

export const addRecipe = (newRecipe) => {
  newRecipe.id = String(recipes.length + 1); // Generate new ID
  recipes.push(newRecipe);
};

export default recipes;
// DESCRIPTION:
// Pete likes to bake some
// cakes.He has some recipes and ingredients.Unfortunately he is not good in maths.Can you
// help him to find out, how many cakes he could bake considering his recipes ?

// Write a function cakes(), which takes the recipe (object) and the available
// ingredients(also an object) and returns the maximum number of cakes Pete can bake(integer).
// For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are
//   simply 1 or 200).Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000,
// milk: 2000});

function peteTheBaker(recipe, ingredients) {
  // for each ingredient in my ingredients object, find the matching value in the recipe
  // when we have the matching value divide ingredient value by recipe value
  // Math.floor(recipe[key] / )
  // ie. flour: 1200 / 500 -> 2
  // sugar: 1200/200 -> 6
  // eggs: 5/1 -> 5
  // milk: Not in recipe, so do not consider
  const numCakes = [];
  for (let ingredient in ingredients) {
    if (recipe[ingredient]) {
      numCakes.push(Math.floor(ingredients[ingredient] / recipe[ingredient]));
    }
  }
  for (let ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }
  }
  return Math.min(...numCakes);
}

console.log(
  peteTheBaker(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);

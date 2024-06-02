import {Recipe} from '../interfaces';

export const calculateRecipeRating = (recipe: Recipe): number => {
  if (!recipe.ratings || recipe.ratings.length === 0) {
    return 0;
  }
  const sum = recipe.ratings.reduce(
    (acc, ratingObj) => acc + ratingObj.rating,
    0,
  );

  return sum / recipe.ratings.length;
};

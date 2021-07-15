import BigMealCard from "../components/MealCard/BigMealCard";
import MiniMealCard from "../components/MealCard/MiniMealCard";
import ResultsList from "../components/SearchResults/ResultsList";
import {
  updateFavoritedMeal,
  updateFavoriteMealDB,
  getIsMealFavoriteMealDB,
  getMealDataMealDB,
  getMealDB,
} from "../services/localStorage";
import { singleReRender, updateResultListRender } from "./reRender";

export const favoriteMeal = (mealID, nodeID) => {
  // If meal in mealDB favorited then remove it from favorite-meals
  updateFavoritedMeal(mealID, !getIsMealFavoriteMealDB(mealID));

  // Toggle the mealDB isFavorited data
  updateFavoriteMealDB(mealID);

  let isBig = nodeID.startsWith("js-big-");
  let NodeComponent = isBig ? BigMealCard : MiniMealCard;

  isBig
    ? singleReRender("js-modal", nodeID, getMealDataMealDB(mealID), BigMealCard)
    : updateResultListRender(
        "js-results",
        "js-results-list",
        getMealDB(),
        ResultsList
      );
};

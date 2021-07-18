import {
  updateFavoritedMeal,
  updateFavoriteMealDB,
  getIsMealFavoriteMealDB,
  getMealDataMealDB,
  getMealDB,
} from "../services/localStorage";
import {
  BIG_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_ID,
  BIG_MEAL_CARD_FAVORITE_BUTTON_REFERENCE_NODE_ID,
  MINI_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_PREFIX,
  SEARCH_RESULTS_CONTAINER_ID,
  SEARCH_RESULTS_LIST_ELEMENT_ID,
} from "../config/constants";
import { insertReRender, reRender, updateResultListRender } from "./reRender";
import BigCardFavoriteButton from "../components/MealCard/BigMealCard/BigCardFavoriteButton";
import MiniCardFavoriteButton from "../components/MealCard/MiniMealCard/MiniCardFavoriteButton";
import sortByFavorite from "./sortByFavorite";
import ResultsList from "../components/SearchResults/ResultsList";
import MiniMealCard from "../components/MealCard/MiniMealCard";

export const favoriteMeal = (mealID, nodeID) => {
  // If meal in mealDB favorited then remove it from favorite-meals
  updateFavoritedMeal(mealID, !getIsMealFavoriteMealDB(mealID));

  // Toggle the mealDB isFavorited data
  updateFavoriteMealDB(mealID);

  // Check if called by meal card modal
  let isBig = nodeID.startsWith("js-big-");

  // Selected meal data
  let { idMeal, isFavorited } = getMealDataMealDB(mealID);

  isBig
    ? insertReRender(
        BIG_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_ID,
        nodeID,
        BigCardFavoriteButton,
        { idMeal, isFavorited },
        BIG_MEAL_CARD_FAVORITE_BUTTON_REFERENCE_NODE_ID
      )
    : reRender(
        MINI_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_PREFIX + mealID,
        nodeID,
        MiniCardFavoriteButton,
        { idMeal, isFavorited }
      );

  // Re-render updated result list
  let mealData = sortByFavorite(getMealDB());

  updateResultListRender(
    SEARCH_RESULTS_CONTAINER_ID,
    SEARCH_RESULTS_LIST_ELEMENT_ID,
    ResultsList,
    mealData
  );
};

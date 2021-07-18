import MiniMealCard from "../components/MealCard/MiniMealCard";
import { HEADER_USER_NAME_SELECTOR_ID } from "../config/constants";
import { getUserName, getMealDB } from "../services/localStorage";
import { initialResultsListRender } from "../utils/reRender";
import sortByFavorite from "./sortByFavorite";

export const initDOMUpdate = () => {
  // Update username with localStorage data
  document.getElementById(HEADER_USER_NAME_SELECTOR_ID).innerText =
    getUserName();

  // Local storage meal data sorted by favorites
  let mealData = sortByFavorite(getMealDB());

  // Update search results with local storage
  // js-results-list -> Result List container ID
  // js-52977 -> Rendered element ID (Initial Render With Example  Data)
  initialResultsListRender(
    "js-results-list",
    "js-52977",
    mealData,
    MiniMealCard
  );
};

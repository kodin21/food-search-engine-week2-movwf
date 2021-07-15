import MiniMealCard from "../components/MealCard/MiniMealCard";
import { getUserName, getMealDB } from "../services/localStorage";
import reRender from "../utils/reRender";

export const initDOMUpdate = () => {
  // Update username with localStorage data
  document.getElementById("js-user-name").innerText = getUserName();

  // Update search results with local storage
  // js-results-list -> Result List container ID
  // js-52977 -> Rendered element ID
  reRender("js-results-list", "js-52977", getMealDB(), MiniMealCard);
};

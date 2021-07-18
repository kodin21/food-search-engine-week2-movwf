import Fuse from "fuse.js";
import fetchMealData from "../services/fetchMealData";
import fetchUserData from "../services/fetchUserData";
import {
  initiateUserDB,
  initiateMealDB,
  initiateFavoriteMealsDB,
  controlOfflineData,
  getMealDB,
} from "../services/localStorage";
import { initDOMUpdate } from "./initDOMUpdate";
import { showLoading, hideLoading } from "./showLoading";
import Options from "../fuse.options";

initiateFavoriteMealsDB(); // Create empty storage for favorited meals

showLoading(); // Renders loading screen

export let fussy;

document.addEventListener("DOMContentLoaded", () => {
  // Check if data is already fetched go Offline mode.
  if (controlOfflineData()) {
    // Delay for visual
    setTimeout(() => {
      hideLoading();
      // Update DOM values
      initDOMUpdate();
    }, 2000);
    // Create Fuse Object after data load
    fussy = new Fuse(getMealDB(), Options);
  } else {
    // First time fetch online data to localStorage
    Promise.all([fetchUserData, fetchMealData]).then((data) => {
      const [userData, mealData] = data;

      initiateUserDB(userData); // Create storage for user data
      initiateMealDB(mealData.record); // Create storage for meal data

      // Delay for visual
      setTimeout(() => {
        hideLoading();
        // Update DOM values
        initDOMUpdate();
      }, 2000);

      // Create Fuse Object after data load
      fussy = new Fuse(mealData.record, Options);
    });
  }
});

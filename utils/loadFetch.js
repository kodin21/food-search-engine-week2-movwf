import fetchMealData from "../services/fetchMealData";
import fetchUserData from "../services/fetchUserData";
import {
  initiateUserDB,
  initiateMealDB,
  initiateFavoriteMealsDB,
  controlOfflineData,
} from "../services/localStorage";
import { initDOMUpdate } from "./initDOMUpdate";
import { showLoading, hideLoading } from "./showLoading";

initiateFavoriteMealsDB(); // Create empty storage for favorited meals
showLoading(); // Renders loading screen

document.addEventListener("DOMContentLoaded", () => {
  // Check if data is already fetched go Offline mode.
  if (controlOfflineData()) {
    // Delay for visual
    setTimeout(() => {
      hideLoading();
      // Update DOM values
      initDOMUpdate();
    }, 2000);
  } else {
    // First time fetch online data to localStorage
    Promise.all([fetchUserData, fetchMealData]).then((data) => {
      initiateUserDB(data[0]); // Create storage for user data
      initiateMealDB(data[1].record); // Create storage for meal data

      // Delay for visual
      setTimeout(() => {
        hideLoading();
        // Update DOM values
        initDOMUpdate();
      }, 2000);
    });
  }
});

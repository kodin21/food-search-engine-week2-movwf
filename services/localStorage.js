/*
 ========================================
    LOCAL STORAGE DATABANK FUNCTIONS
 ========================================
*/

const createDataBank = (dbId) => {
  // Look if storage exist and initiate
  localStorage.getItem(dbId)
    ? console.log("DB Already Initiated : " + dbId)
    : localStorage.setItem(dbId, JSON.stringify("empty"));
};

const retrieveDataBank = (dbId) => {
  let dataBank = localStorage.getItem(dbId);

  // Check if databank doesn't exists
  if (!dataBank) {
    createDataBank(dbId);
    // Return created databank
    return retrieveDataBank(dbId);
  }

  return JSON.parse(dataBank);
};

const updateDataBank = (dbId, newData) => {
  localStorage.setItem(dbId, JSON.stringify(newData));
};
/*
 ========================================
    USER FUNCTIONS
 ========================================
*/
const USER_DATA_DB_NAME = "mealie-user";

const initiateUserDB = (userData) => {
  updateDataBank(USER_DATA_DB_NAME, userData);
};

const getUserName = () => {
  let data = retrieveDataBank(USER_DATA_DB_NAME);

  return data.name;
};

const updateUserData = (newUserData) => {
  let data = retrieveDataBank(USER_DATA_DB_NAME);

  updateDataBank(USER_DATA_DB_NAME, newUserData);
};

/*
 ========================================
    FAVORITE MEAL FUNCTIONS
 ========================================
*/
const FAVORITE_MEAL_DB_NAME = "mealie-favorited-meals";

const initiateFavoriteMealsDB = () => {
  if (retrieveDataBank(FAVORITE_MEAL_DB_NAME) === "empty") {
    updateDataBank(FAVORITE_MEAL_DB_NAME, []);
  }
};

/**
 * Local storage favorite meal update function.
 * @param {string} idMeal Meal ID
 * @param {boolean} mode true : Append || false : Remove
 */
const updateFavoritedMeal = (idMeal, mode) => {
  let data = retrieveDataBank(FAVORITE_MEAL_DB_NAME);

  const inData =
    data.length !== 0
      ? data.filter((mealID) => mealID == idMeal).length == 0
      : false;

  mode
    ? inData
      ? console.log("Already favorited the meal.")
      : updateDataBank(FAVORITE_MEAL_DB_NAME, [...data, idMeal])
    : updateDataBank(
        FAVORITE_MEAL_DB_NAME,
        data.filter((mealID) => mealID != idMeal)
      );
};

/*
 ========================================
    MEAL DATABANK FUNCTIONS
 ========================================
*/
const MEAL_DB_NAME = "mealie-meal-db";

const initiateMealDB = (mealData) => {
  mealData.forEach((meal) => {
    meal.isFavorited = false;
  });

  updateDataBank(MEAL_DB_NAME, mealData);
};

const getMealDB = () => {
  return retrieveDataBank(MEAL_DB_NAME);
};

const getMealDataMealDB = (mealID) => {
  return retrieveDataBank(MEAL_DB_NAME).filter(
    (meal) => meal.idMeal == mealID
  )[0];
};

const getIsMealFavoriteMealDB = (mealID) => {
  let data = getMealDB();
  // Select index of meal
  let selectedMealIndex = data.findIndex((meal) => meal.idMeal == mealID);

  return data[selectedMealIndex].isFavorited;
};

const updateFavoriteMealDB = (mealID) => {
  let data = getMealDB();
  // Select index of meal
  let selectedMealIndex = data.findIndex((meal) => meal.idMeal == mealID);
  // Update meal
  data[selectedMealIndex].isFavorited = !data[selectedMealIndex].isFavorited;

  // update MealDB
  updateDataBank(MEAL_DB_NAME, data);
};

/*
 ========================================
    OFFLINE MODE CONTROLLER
 ========================================
*/

const controlOfflineData = () => {
  return (
    localStorage.getItem(MEAL_DB_NAME) != null &&
    localStorage.getItem(USER_DATA_DB_NAME) != null
  );
};

export {
  initiateUserDB,
  initiateMealDB,
  initiateFavoriteMealsDB,
  controlOfflineData,
  createDataBank,
  retrieveDataBank,
  updateDataBank,
  getUserName,
  updateUserData,
  getMealDB,
  getMealDataMealDB,
  updateFavoriteMealDB,
  getIsMealFavoriteMealDB,
  updateFavoritedMeal,
};

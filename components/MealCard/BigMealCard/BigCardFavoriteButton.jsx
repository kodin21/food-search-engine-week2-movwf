import { DombulDOM } from "dombul-dom";
import {
  BIG_MEAL_CARD_FAVORITE_BUTTON_PREFIX,
  JS_EL_PREFIX,
} from "../../../config/constants";
import { favoriteMeal } from "../../../utils/favoriteMeal";

const BigCardFavoriteButton = ({ idMeal, isFavorited }) => {
  let id = BIG_MEAL_CARD_FAVORITE_BUTTON_PREFIX + idMeal;

  return (
    <i
      id={id}
      className={`fa-star fa-2x ${
        isFavorited ? "fas text-yellow-500" : "far text-black"
      } hover:text-opacity-50 hover:cursor-pointer`}
      onClick={() => {
        favoriteMeal(idMeal, id);
      }}
    ></i>
  );
};

export default BigCardFavoriteButton;

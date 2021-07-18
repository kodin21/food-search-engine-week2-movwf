import { DombulDOM } from "dombul-dom";
import { MINI_MEAL_CARD_FAVORITE_BUTTON_PREFIX } from "../../../config/constants";

const MiniCardFavoriteButton = ({ idMeal, isFavorited }) => {
  return (
    <i
      id={MINI_MEAL_CARD_FAVORITE_BUTTON_PREFIX + idMeal}
      className={`fa-star fill-current ${
        isFavorited ? "fas text-yellow-500" : "far text-white"
      }`}
    />
  );
};

export default MiniCardFavoriteButton;

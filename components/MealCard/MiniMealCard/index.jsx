import { DombulDOM } from "dombul-dom";
import {
  JS_EL_PREFIX,
  MINI_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_PREFIX,
  MINI_MEAL_CARD_FAVORITE_BUTTON_PREFIX,
} from "../../../config/constants";
import { favoriteMeal } from "../../../utils/favoriteMeal";
import { showModal } from "../../../utils/toggleModal";
import MiniCardFavoriteButton from "./MiniCardFavoriteButton";
import BigMealCard from "../BigMealCard";

const MiniMealCard = (props) => {
  const { idMeal, isFavorited, strMealThumb, strMeal, strArea, strCategory } =
    props;

  return (
    <div
      id={JS_EL_PREFIX + props.idMeal}
      className="relative w-[150px] h-52 rounded-lg shadow-md border flex flex-col mr-2 mb-2 transition ease-in-out duration-500 hover:border-black hover:cursor-pointer"
      onClick={() => {
        showModal(BigMealCard(props), JS_EL_PREFIX + "big-" + idMeal);
      }}
    >
      <div
        id={MINI_MEAL_CARD_FAVORITE_BUTTON_CONTAINER_PREFIX + idMeal}
        className="absolute z-10 w-8 h-8 top-1 right-1 rounded-full flex flex-col justify-center items-center bg-black hover:bg-opacity-50 outline-none"
        onClick={(e) => {
          e.stopPropagation();
          favoriteMeal(idMeal, MINI_MEAL_CARD_FAVORITE_BUTTON_PREFIX + idMeal);
        }}
      >
        {MiniCardFavoriteButton({ idMeal, isFavorited })}
      </div>
      <img
        src={strMealThumb}
        alt=""
        className="w-full h-3/5 bg-black rounded-t-lg"
      ></img>
      <span className="w-full text-md font-bold py-2 px-2 truncate">
        {strMeal}
      </span>
      <div className="h-6 flex flex-row items-center mt-3">
        <span className="text-sm pl-2 w-1/2 truncate">{strCategory}</span>
        <span className="text-xs pr-2 w-1/2 font-light truncate text-right">
          {strArea}
        </span>
      </div>
    </div>
  );
};

export default MiniMealCard;

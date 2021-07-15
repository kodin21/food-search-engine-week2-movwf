import { DombulDOM } from 'dombul-dom';
import { favoriteMeal } from '../../utils/favoriteMeal';

const BigMealCard = ({
  idMeal,
  strMeal,
  strArea,
  strCategory,
  strMealThumb,
  strYoutube,
  isFavorited
}) => {
  return (
    <div
      id={"js-big-"+idMeal}
      className="relative w-[300px] z-20 h-96 bg-white rounded-lg border-2 border-black"
      onKeyDown={(e)=>{
        if(e.key == "F" || e.key == "f"){
          favoriteMeal(idMeal,"js-big-"+idMeal);
        }
      }}
      tabIndex="0"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-3/5 bg-black rounded-t-lg"
      />
      <span className="w-full text-md font-bold mt-2 px-2 truncate">{strMeal}</span>
      <div className="h-6 flex flex-row items-center mt-3">
        <span className="text-sm pl-2 w-1/2 truncate">{strCategory}</span>
        <span className="text-xs pr-2 w-1/2 font-light truncate text-right">
          {strArea}
        </span>
      </div>
      <div className="h-20 w-full z-40 flex flex-row justify-evenly items-center">
        <a
          id="js-favorite-button"
          className="h-14 w-14 flex flex-col justify-center items-center"
          href={strYoutube}
        >
          <i className="fab fa-youtube fa-2x hover:text-red-400"></i>
          <span>Video</span>
        </a>
        <div className="h-14 w-14 flex flex-col justify-center items-center">
          <i className={`far fa-star fa-2x hover:bg-yellow-300 hover:mouse-pointer ${isFavorited?"text-white bg-yellow-500":"text-black"}`}
             onClick={()=>{
              favoriteMeal(idMeal,"js-big-"+idMeal);
             }}
          ></i>
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default BigMealCard;
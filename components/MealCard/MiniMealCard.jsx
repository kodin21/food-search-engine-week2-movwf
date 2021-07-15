import { DombulDOM } from 'dombul-dom';
import { favoriteMeal } from '../../utils/favoriteMeal';
import { showModal } from '../../utils/toggleModal';
import BigMealCard from './BigMealCard'

const MiniMealCard = ({ idMeal, strMeal, strArea, strCategory, strMealThumb, strYoutube, isFavorited }) => {
  return (
    <div id={"js-"+idMeal} className="relative w-[150px] h-52 rounded-lg shadow-md border flex flex-col mr-2 mb-2 transition ease-in-out duration-500 hover:border-black hover:cursor-pointer"
      onClick={()=>{
       showModal(BigMealCard({ idMeal, strMeal, strArea, strCategory, strMealThumb, strYoutube, isFavorited }),"js-big-"+idMeal);
      }}
      tabIndex="1"
    >
      <div 
        className="absolute z-10 w-8 h-8 top-1 right-1 flex flex-col justify-center items-center"
        tabIndex="3"
        onClick={(e)=>{
          e.stopPropagation();
          favoriteMeal(idMeal,"js-"+idMeal);
        }}
      >
        <div className={`w-8 h-8 rounded-full flex flex-col justify-center items-center ${isFavorited?"hover:bg-yellow-100 bg-yellow-400":"hover:bg-gray-300 bg-black"}`}>
          <i className="far fa-star text-white fill-current"></i>
        </div>
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
import { DombulDOM } from 'dombul-dom';
import MiniMealCard from '../MealCard/MiniMealCard';

const ResultsList = (list) => {
  return (
    <div id="js-results-list" className="w-full flex flex-wrap justify-space-around px-5 md:px-10 lg:px-16">
      {list.map(MiniMealCard)}
    </div>
  );
};

export default ResultsList;
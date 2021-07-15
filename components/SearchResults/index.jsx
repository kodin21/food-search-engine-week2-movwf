import { DombulDOM } from 'dombul-dom';
import SearchResultsHeader from './SearchResultsHeader';
import ResultsList from './ResultsList';

let list = [
  {
    idMeal: "52977",
    strMeal: "Corba",
    strArea: "Turkish",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strYoutube:"",
    isFavorited:false
  }
];

const SearchResults = () => {
  return (
    <main id="js-results" className="flex flex-col">
      {SearchResultsHeader()}
      {ResultsList(list)}
    </main>
  );
};

export default SearchResults;
import { DombulDOM } from "dombul-dom";
import { updateResultListRender } from "../../utils/reRender";
import { getMealDB } from "../../services/localStorage";
import { fussy } from "../../utils/loadFetch";
import debounce from "../../utils/deBounce";
import {
  SEARCH_RESULTS_CONTAINER_ID,
  SEARCH_RESULTS_LIST_ELEMENT_ID,
} from "../../config/constants";
import ResultsList from "../SearchResults/ResultsList";
import sortByFavorite from "../../utils/sortByFavorite";

const bouncePrint = debounce((e) => {
  // If input has some value
  if (e.target.value !== "") {
    let searchResult = fussy
      .search(e.target.value)
      .map((result) => result.item);
    // Sort results by favorites
    searchResult = sortByFavorite(searchResult);

    // Render list with search results
    updateResultListRender(
      SEARCH_RESULTS_CONTAINER_ID,
      SEARCH_RESULTS_LIST_ELEMENT_ID,
      ResultsList,
      searchResult
    );
  } else {
    // Local storage meal data sorted by favorites
    let mealData = sortByFavorite(getMealDB());

    // If input is empty render all elements back
    updateResultListRender(
      SEARCH_RESULTS_CONTAINER_ID,
      SEARCH_RESULTS_LIST_ELEMENT_ID,
      ResultsList,
      mealData
    );
  }
}, 250);

const SearchBar = () => {
  return (
    <section
      id="search-bar"
      className="w-full py-5 bg-red-100 flex flex-row justify-center"
    >
      <input
        type="search"
        className="w-96 bg-purple-white shadow rounded border-0 p-3"
        placeholder="Search by name..."
        onKeyUp={bouncePrint}
      />
    </section>
  );
};

export default SearchBar;

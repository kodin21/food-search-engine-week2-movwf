import { DombulDOM } from 'dombul-dom';
import { getMealDB } from '../../services/localStorage'
import { updateResultListRender } from '../../utils/reRender';
import debounce from '../../utils/deBounce'
import ResultsList from '../SearchResults/ResultsList';
import { fussy } from '../../utils/loadFetch';

const bouncePrint = debounce((e)=>{      
  if(e.target.value !== ""){
    updateResultListRender(
      "js-results",
      "js-results-list",
      fussy.search(e.target.value).map(result=>result.item),
      ResultsList)
  }else{
    updateResultListRender(
      "js-results",
      "js-results-list",
      getMealDB(),
      ResultsList)
  }
},250);

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
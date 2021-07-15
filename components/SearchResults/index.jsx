import { DombulDOM } from 'dombul-dom';
import SearchResultsHeader from './SearchResultsHeader';

const SearchResults = () => {
  return (
    <main id="js-results" className="flex flex-col">
      {SearchResultsHeader()}
    </main>
  );
};

export default SearchResults;
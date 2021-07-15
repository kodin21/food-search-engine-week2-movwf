import { DombulDOM } from 'dombul-dom';

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
      />
    </section>
  );
};

export default SearchBar;
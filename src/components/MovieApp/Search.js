import debounce from "../../utilities/debounce";
import { useMovieContext } from "../../utilities/context";

const Search = () => {
  const { searchQuery, setSearchQuery, isError } = useMovieContext();

  function handleSearchInput(val) {
    //console.log(e.target.value);
    setSearchQuery(val);
  }

  let debounced = debounce(handleSearchInput, 1000);

  return (
    <div className="search-container">
      <h4>Search your favourite Movie</h4>
      <input
        type="text"
        id="search"
        className="search-input"
        // value={searchQuery}
        onChange={(e) => debounced(e.target.value)} //debounce(handleSearchInput, 3000)} //handleSearchInput(e)}
      />

      {isError.show && (
        <p style={{ color: "red" }}>{"Error - " + isError.message}</p>
      )}
    </div>
  );
};

export default Search;

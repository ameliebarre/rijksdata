import { BiSearch as SearchIcon } from "react-icons/bi";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div>
        <label htmlFor="searchbar" className="searchbar__label">
          Search
        </label>
        <span className="searchbar__legend">
          Millions of works and collections.
        </span>
      </div>
      <div className="searchbar__input">
        <SearchIcon
          size={20}
          fill="#9e9e9e"
          className="searchbar__input-icon"
        />
        <input
          id="searchbar"
          className="searchbar__input-field"
          placeholder="Search by..."
        />
      </div>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import { BiSearch as SearchIcon } from "react-icons/bi";

import "./SearchBar.css";

type SearchBarProps = {
  onSearchValue: (value: string) => void;
};

const SearchBar = ({ onSearchValue }: SearchBarProps) => {
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <div className="searchbar">
      <div>
        <label htmlFor="searchbar" className="searchbar__label">
          Search
        </label>
        <span className="searchbar__legend">
          Thousand of works and collections.
        </span>
      </div>
      <div className="searchbar__group">
        <div className="searchbar__input">
          <SearchIcon
            size={20}
            fill="#9e9e9e"
            className="searchbar__input-icon"
          />
          <input
            id="searchbar"
            className="searchbar__input-field"
            placeholder="Rembrandt Van Rijn"
            onChange={(e) => setSearchedValue(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="searchbar__button"
          onClick={() => onSearchValue(searchedValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

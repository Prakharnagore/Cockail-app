import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchValue.current.focus();
  });

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            autoFocus
            placeholder="SearchCockTails"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

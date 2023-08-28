import { useState } from "react";
import css from "./Searchbar.module.css";

export const Searchbar = ({onSubmit}) => {
 
const [query, setQuery] = useState('')

const handleChange = (e) => {
    setQuery(e.target.value);
  };

const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };
  
  return (
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
  );
}


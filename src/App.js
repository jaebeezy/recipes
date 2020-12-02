import React, { useEffect, useState } from "react";

import Recipe from "./Recipe";

import "./App.css";

const App = () => {
  const APP_ID = "cd776a6a";
  const APP_KEY = "2c9a012cb6d63bc499f8db396c0132e7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="input"
          type="text"
          placeholder="Search a recipe..."
          value={search}
          onChange={updateSearch}
        />
        <button className="button is-outlined" type="submit">
          Search
        </button>
      </form>
      <div className="is-flex-direction-column">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

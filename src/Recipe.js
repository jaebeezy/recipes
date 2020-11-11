import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="box">
      <div className="content">
        <h1 className="is-large">{title}</h1>      
        <p className="subtitle is-4">Total Calories - {Math.round(calories)}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <figure className="image is-128x128">
          <img className="is-rounded" src={image} alt="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        </div>
    </div>
  );
};

export default Recipe;

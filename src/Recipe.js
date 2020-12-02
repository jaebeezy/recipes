import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  
  const uppercasedTitle = title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return (
    <div className="box">
      <div className="content">
        <h1 className="is-large has-text-centered">{uppercasedTitle}</h1>      
        <p className="subtitle is-4 has-text-centered">Total Calories - {Math.round(calories)}</p>
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

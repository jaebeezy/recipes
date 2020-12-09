import React from "react";
import { v4 as uuidv4 } from "uuid";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  const uppercasedTitle = title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return (
    <div className="box" onClick={() => window.open(url)}>
      <div className="content">
        <h1 className="is-large has-text-centered">{uppercasedTitle}</h1>
        <p className="subtitle is-4 has-text-centered">
          Total Calories - {Math.round(calories)}
        </p>
        <div className="is-flex is-justify-content-space-between is-align-content-baseline">
          <ul>
            {ingredients.map((ingredient) => (
              <li key={uuidv4()}>{ingredient.text}</li>
            ))}
          </ul>
          <figure className="image is-128x128">
            <img
              style={{ boxShadow: "2px 2px 50px rgb(211, 211, 211)" }}
              className="is-rounded"
              src={image}
              alt="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

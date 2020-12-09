import React from "react";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="content fade-in">
        <h1
          style={{ paddingTop: "50px", color: "#17873f" }}
          className="is-large has-text-centered"
        >
          Recipes
        </h1>
        <p
          style={{ color: "#17873f" }}
          className="subtitle is-7 has-text-centered"
        >
          powered by{" "}
          <a
            style={{ color: "#17873f" }}
            href="https://www.edamam.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            edamam
          </a>
        </p>
        <p
          style={{ paddingTop: "50px" }}
          className="subtitle is-6 has-text-centered"
        >
          search for ingredients
        </p>
        <p className="subtitle is-6 has-text-centered">click on a recipe</p>
        <p className="subtitle is-6 has-text-centered">bon appétit</p>
        <p className="subtitle is-6 has-text-centered">
          <span role="img" aria-label="chef">
            👨‍🍳
          </span>{" "}
          !
        </p>
      </div>
    </div>
  );
};

export default LandingPage;

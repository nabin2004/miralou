import React from "react";

export const CategoryCard = (props) => {
  const category = props.category;

  return (
    <div className="">
      <h1>{category.name}</h1>
    </div>
  );
};

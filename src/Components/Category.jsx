import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromises = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryPromises);
  return (
    <div>
      <h1 className="base-200 font-bold px-3 py-1">
        All Category({categories.length})
      </h1>
      <div className="grid grid-cols-1 mt-5 space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={"btn base-100 bg-transparent border-0 hover:bg-base-200"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;

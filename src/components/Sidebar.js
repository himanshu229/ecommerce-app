import React from "react";

const Sidebar = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

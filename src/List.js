import React from "react";
const List = ({ items }) => {
  return (
    <div>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;

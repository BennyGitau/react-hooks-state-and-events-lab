import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdd, setIsAdd] = useState(false)
  const liClass = isAdd? 'in-cart': "";
  function handleClick(){
    setIsAdd(!isAdd)
  }
 const addToCart= !isAdd? 'Add to Cart': 'Remove From Cart'
  return (
    <li onClick={handleClick} className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">{addToCart}</button>
    </li>
  );
}

export default Item;

// Item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className=" bg-blue-200 border-black border p-4 mb-4 rounded-lg">

      <div className=" flex items-center justify justify-between">
        <div>
            <p  className="text-black font-bold text-lg mb-2">{name}</p>
            <p  className="text-black">Quantity: {quantity}</p>
        </div>
        <span className="text-black">Category: {category}</span>
      </div>
    </li>
  );
};

export default Item;

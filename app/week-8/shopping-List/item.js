import React from 'react';

const Item = ({ name, quantity, category, onSelect}) => {
  return (
    <li className=" bg-blue-200 border-gray-400 border p-4 mb-4 rounded-lg">
        onClick={onSelect}
        style={{ backgroundColor: '#cffafe' }} 
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


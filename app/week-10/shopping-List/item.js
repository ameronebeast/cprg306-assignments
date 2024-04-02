import React from 'react';

const Item = ({ item }) => {
  return (
    <li style={{ backgroundColor: '#f9f9f9', border: '1px solid #ccc', marginBottom: '10px', padding: '10px', borderRadius: '5px' }}>
      <strong>Name:</strong> {item.name} - <strong>Quantity:</strong> {item.quantity} - <strong>Category:</strong> {item.category}
    </li>
  );
};

export default Item;
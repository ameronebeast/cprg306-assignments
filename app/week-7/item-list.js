"use client";
import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  // Function to sort items by name
  const sortItemsByName = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    return sortedItems;
  };

  // Function to sort items by category
  const sortItemsByCategory = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    return sortedItems;
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Items</h2>
      <div>
        <button style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={sortItemsByName}>Sort by Name</button>
        <button style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={sortItemsByCategory}>Sort by Category</button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
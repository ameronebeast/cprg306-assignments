"use client";
import React, { useState } from 'react';
import Item from './item'; 

const ItemList = ({ items }) => {
  // Initialize state variables
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sort and group the items based on state variables
  const sortedItems = [...(items || [])].sort((a, b) => {
    if (groupByCategory) {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  

  // Create buttons to change the sorting and grouping preferences
  const nameButtonColor = sortBy === 'name' ? 'green' : 'white';
  const categoryButtonColor = sortBy === 'category' ? 'green' : 'white';
  const groupByCategoryButtonColor = groupByCategory ? 'green' : 'white';

  return (
    <div>
      {/* Sort Buttons */}
      <button onClick={() => setSortBy('name')} style={{ backgroundColor: nameButtonColor }}className='space-y-2 px-4 py-2 bg-orange-500 text-black  rounded hover:bg-orange-600 focus:outline-none space-y-2'>
        Sort by Name
      </button>
      <button onClick={() => setSortBy('category')} style={{ backgroundColor: categoryButtonColor }}className='px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 focus:outline-none'>
        Sort by Category
      </button>

      <button onClick={() => setGroupByCategory(!groupByCategory)} style={{ backgroundColor: groupByCategoryButtonColor }}className='px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 focus:outline-none'>
        Group by Category
      </button>

      {groupByCategory ? (
        // Grouped by Category
        Object.entries(
          sortedItems.reduce((acc, item) => {
            const category = item.category;
            acc[category] = [...(acc[category] || []), item];
            return acc;
          }, {})
        ).map(([category, categoryItems]) => (
          <div key={category}>
            <h2 className="text-white text-2xl font-bold capitalize">{category}</h2>
            <ul>
              {categoryItems.map((item) => (
                <li key={item.id}>
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        // Not Grouped
        sortedItems.map((item) => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />)
      )}
    </div>
  );
};

export default ItemList;

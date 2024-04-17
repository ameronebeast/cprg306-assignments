"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <main className=" p-5 min-h-screen bg-blue-300">
      <div className="max-w-5xl mx-auto text-black">
        <h1 className="text-4xl font-bold text-center text-blue-900">Shopping List App</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
    </main>
  );
};

export default Page;
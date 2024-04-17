// Page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

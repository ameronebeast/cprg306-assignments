// Page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className=" bg-blue-300 container mx-auto p-4 wit w-full min-h-screen">
      <h1 className="text-3xl text-black  font-bold mb-8">Shopping List</h1>
      <ItemList/>
    </main>
  );
};

export default Page;

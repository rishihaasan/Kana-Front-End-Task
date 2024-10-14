// src/components/UnderConstruction.js
import React from 'react';

const UnderConstruction = ({ pageName }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-[#0C0C0D]">
      <h1 className="text-4xl font-bold text-white mb-4">{pageName}</h1>
      <p className="text-lg text-gray-400">This page is currently under construction.</p>
    </div>
  );
};

export default UnderConstruction;

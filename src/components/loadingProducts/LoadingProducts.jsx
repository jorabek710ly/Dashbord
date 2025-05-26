import React from 'react';
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingProducts = () => {
  const loadingProducts = Array(cardsPerLoad).fill("");

  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {loadingProducts.map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse"
        >
          <div className="h-40 sm:h-56 md:h-72 bg-gray-200 w-full" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(LoadingProducts);

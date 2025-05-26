import React from 'react';
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingPosts = () => {
  const loadingPosts = Array(cardsPerLoad).fill("");

  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadingPosts.map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
        >
          <div className="h-10 md:h-12 border-b border-gray-200 bg-gray-100 flex items-center px-4">
            <p className="text-sm text-gray-500 truncate"></p>
          </div>

          <div className="py-3 px-4 h-16 md:h-20 flex items-center">
            <p className="text-sm text-gray-600">Content:</p>
          </div>

          <div className="mt-auto border-t border-gray-200 px-4 py-3 flex justify-end">
            <p className="text-sm text-blue-500 cursor-pointer hover:underline">
              See the full detail
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(LoadingPosts);

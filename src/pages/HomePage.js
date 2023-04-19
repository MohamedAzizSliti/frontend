import React from 'react';
import { FaSearch } from 'react-icons/fa';
import FoodCategory from '../components/FoodCategory';
import { foodCategories, foodData } from '../utils/fakeData';
import FoodArticle from '../components/FoodArticle';
import BasketButton from '../components/BasketButton';

export const HomePage = () => {

  
  return (
    <div className="w-full p-4">
      <BasketButton />
      <div className="flex justify-around flex-row w-full">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Bienvenue à <big>WAMYA</big></h1>
          <p className="text-base">choisissez la catégorie</p>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              className="w-full h-10 px-3 pr-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-color-orange"
              type="text"
              placeholder="Rechercher"
            />
            <FaSearch
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-stretch">

      {foodCategories.map((category) => (
        <FoodCategory key={category.id} category={category} />
      ))}
      </div>
      <div className="flex flex-wrap justify-stretch">
      {foodData.map(article => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-4" key={article.id}>
          <FoodArticle article={article} />
        </div>
      ))}
    </div>
    </div>
  );
};

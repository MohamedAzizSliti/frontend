import React from 'react';

const FoodCategory = ({ category }) => {
  return (
    <div className="bg-white shadow-lg w-16 h-24 m-3 mb-2 overflow-hidden rounded-full flex flex-col items-center justify-center hover:bg-color-orange hover:text-white transform hover:scale-110 duration-200">
      <img src={require("../images/"+category.image+".jpg")} alt={category.title} className="w-12 h-12 object-cover rounded-full p-1" />
      <div className="p-1 text-center">
        <p className="text-sm "><small> {category.title}</small></p>
      </div>
    </div>
  );
};

export default FoodCategory;

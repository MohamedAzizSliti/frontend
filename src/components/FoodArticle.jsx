import React from 'react';
import { FaPlus } from 'react-icons/fa';

  const FoodArticle = ({ article }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isOrdering, setIsOrdering] = React.useState(false);
  const [orderQuantity, setOrderQuantity] = React.useState(1);

  const handleOrderClick = () => {
    setIsOrdering(true);
  };

  const handleCancelClick = () => {
    setIsOrdering(false);
    setOrderQuantity(1);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setOrderQuantity(value);
  };

  const handlePlaceOrder = () => {
    // TODO: Implement order placement logic here
    setIsOrdering(false);
    setOrderQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img 
          src={require("../images/"+article.image)} 
          alt={article.title} 
          className={`w-full h-52 object-cover duration-300 ${isHovering ? 'transform scale-110' : ''}`} 
        />
        {isHovering && (
          <button className="absolute top-0 right-0 m-4 bg-green-500 hover:bg-green-600 rounded-full p-2" onClick={handleOrderClick}>
            <FaPlus className="text-white" />
          </button>
        )}
      </div>
      <div className="px-4 py-3">
        <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
        <p className="mt-2 text-gray-600">{article.description}</p>
        <div className="mt-4 flex justify-between flex-col items-start">
          <div>
            <span className="text-gray-700 font-bold text-xl">${article.price}</span>
          </div>
          <div className="flex items-center">
            {article.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-black font-semibold text-xs py-1 px-1 mr-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      {isOrdering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
  <div className="bg-white rounded-lg p-8">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Place your order</h3>
    <div className="flex items-center mb-4">
      <label className="mr-2 font-semibold">Quantity:</label>
      <input type="number" min="1" max="10" value={orderQuantity} onChange={handleQuantityChange} className="border border-gray-300 rounded px-2 py-1 w-16" />
    </div>
    <div className="flex justify-end">
      <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 mr-2" onClick={handleCancelClick}>Cancel</button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4" onClick={handlePlaceOrder}>Place order</button>
    </div>
  </div>
</div>

  )}
</div>
);
};
export default FoodArticle;

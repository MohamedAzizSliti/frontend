import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";

const BasketButton = () => {
    const count = 102;
    return (
        <div className="fixed bottom-0 right-0 z-50 m-4 hover:scale-110 duration-200">
            <div className="relative">
                <button className="bg-color-orange text-white rounded-full p-2 w-12 h-12 flex items-center justify-center ">
                    <FaShoppingBasket size="20" />
                </button>
                {count > 0 && (
                    <div className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-sm w-6 h-6 flex items-center justify-center">
                        {count}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BasketButton;

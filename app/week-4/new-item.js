"use client";
import React, { useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if(quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
 
  return (
    <div className="w-64 h-16 m-2">
        <div className="flex items-center justify-around border  border-black rounded">
            <div className="flex-grow p-3">
                <p className="text-center text-2xl w-14">{quantity}</p>
            </div>
            <div className="flex justify-center w-16 p-3">
                <button onClick={decrement} disabled={quantity == 1} className="text-2xl p-4 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-400 rounded">-</button>
            </div>
            <div className="flex justify-center w-16 p-3">
                <button onClick={increment} disabled={quantity == 20} className="text-2xl p-4 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-400 rounded">+</button>
            </div>
            
            
        </div>
    </div>
  );
    
}
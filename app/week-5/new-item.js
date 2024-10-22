"use client";
import React, { useState} from "react";
import Select from "react-select";

const options = [
    { value: "produce", label: "🍇 Produce" },
    { value: "dairy", label: "🥛 Dairy" },
    { value: "bakery", label: "🥐 Bakery" },
    { value: "meat", label: "🍖 Meat" },
    { value: "frozen foods", label: "❄️ Frozen Foods" },
    { value: "canned goods", label: "🥫 Canned Goods" },
    { value: "beverages", label: "🥤 Beverages" },
    { value: "snacks", label: "🍿 Snacks" },
    { value: "household", label: "🧼 Household" },
    { value: "miscellaneous", label: "🛒 Miscellaneous" }
];

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState({value: "produce", label: "🍇 Produce"});
    
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

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log(item);

        alert(`Name: ${name} Quantity: ${quantity} Category: ${category.label}`);
        setQuantity(1);
        setName("");
        setCategory([{value: "produce", label: "🍇 Produce"}]);
    }
 
  return (
    <div className="w-10/12 max-w-96 h-16 m-2">
        <form onSubmit={handleSubmit}>
            <div>
                {/* Required is not working here */}
                <input type="text" placeholder="Item Name" required onChange={(event) => setName(event.target.value)} className="w-full h-8 p-1 my-2 border border-black rounded" value={name}/>
            </div>
            <div className="flex my-2">
                <div className="flex items-center justify-around border  border-black rounded">
                    <div className="flex-grow p-3">
                        <p className="text-center text-2xl w-14">{quantity}</p>
                    </div>
                    <div className="flex justify-center w-16 p-3">
                        <button type="button" onClick={decrement} disabled={quantity == 1} className="text-2xl px-4 py-1 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-400 rounded">-</button>
                    </div>
                    <div className="flex justify-center w-16 p-3">
                        <button type="button" onClick={increment} disabled={quantity == 20} className="text-2xl px-4 py-1 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-400 rounded">+</button>
                    </div>  
                </div>
                <div className="flex-grow">
                    {/* default is undefined in alert if not selected? */}
                    <Select 
                        options={options}
                        onChange={setCategory}
                        className="m-3"
                        defaultValue={category}
                        isSearchable /> 
                </div>
            </div>
            <div>
                <button className="w-64 h-8 bg-blue-300 hover:bg-blue-500 rounded">Add Item</button>
            </div>
        </form>
    </div>
  );
    
}
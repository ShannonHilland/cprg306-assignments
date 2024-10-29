"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items}) {
    const itemsCopy = [...items];
    const [sortBy, setSortBy] = useState("name");

    const sortName = () => setSortBy("name");
    const sortCategory = () => setSortBy("category");
    const sortGrouped = () => setSortBy("grouped");
    
    const sortItems = () => {
        if (sortBy === "grouped") {
            return itemsCopy.reduce((acc, item) => {
                const category = item.category;
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(item);
                return acc;
            }, {});
        } else {
            itemsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
            return itemsCopy;
        }
    };

    const sortedItems = sortItems();

    const getBackgroundClass = (buttonName) => {
        return sortBy === buttonName ? "bg-blue-500" : "bg-blue-300";
    };
    
    return (
        <main>
            <button onClick={sortName} className={`m-2 p-2 rounded ${getBackgroundClass("name")}`}>Name</button>
            <button onClick={sortCategory} className={`m-2 p-2 rounded ${getBackgroundClass("category")}`}>Category</button>
            <button onClick={sortGrouped} className={`m-2 p-2 rounded ${getBackgroundClass("grouped")}`}>Grouped Category</button>
            
            <ul>
                {sortBy !== "grouped" ? (
                    sortedItems.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    ))
                ) : (
                    Object.keys(sortedItems).sort().map(category => (
                        <li key={category}> 
                            <h2>{category}</h2> 
                            <ul>
                                {sortedItems[category].map(item => (
                                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                                ))}
                            </ul>
                        </li>
                    ))
                )}
            </ul>
        </main>
    );
}
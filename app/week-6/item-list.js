"use client";

import Item from "./item";
import itemsJSON from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortItems = () => {
        let items = [...itemsJSON];

        if (sortBy === "grouped") {
            return items.reduce((acc, item) => {
                const category = item.category;
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(item);
                return acc;
            }, {});
        } else {
            items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
            return items;
        }
    };

    const sortedItems = sortItems();

    const sortName = () => setSortBy("name");
    const sortCategory = () => setSortBy("category");
    const sortGrouped = () => setSortBy("grouped");

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
                        <div key={category}>
                            <h1>{category}</h1>
                            <ul>
                                {sortedItems[category].map(item => (
                                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </ul>
        </main>
    );
}
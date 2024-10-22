"use client";

import Item from "./item";
import itemsJSON from "./items.json";
import {useState} from "react";

export default function ItemList() {
    let items = [...itemsJSON];
    const [sortBy, setSortBy] = useState("name");
    if(sortBy !== "grouped") {
        items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else {
        items.reduce((acc, item) => {
            const category = item.category;
            if(!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc
        }, {});
        console.log(items);
    }

    const sortName = () => {
        setSortBy("name");
    };

    const sortCategory = () => {
        setSortBy("category");
    }

    const sortGrouped = () => {
        setSortBy("grouped");

        //create new function to do reduce, need to do a different sort for group as well and change the map
        //can do if statement in return to do group map  if sortBy === "grouped" else base map
    }

    const getBackgroundClass = (buttonName) => {
        if(sortBy === buttonName) {
            return "bg-blue-500";
        } 
        return "bg-blue-300";
    }
    return (
        <main>
            <button onClick={sortName}  className={`m-2 p-2 rounded ${getBackgroundClass("name")}`}>Name</button>
            <button onClick={sortCategory} className={`m-2 p-2 rounded ${getBackgroundClass("category")}`}>Category</button>
            <button onClick={sortGrouped} className={`m-2 p-2 rounded ${getBackgroundClass("grouped")}`}>Grouped Category</button>
            <ul>
                {items.map((item) => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />)}
            </ul>   
        </main>
    );
  
}
"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import {useState} from "react";


export default function Page() {
    const [items, setItems] = useState([...itemsData]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return(
        <main className="m-4">
            <Link href="/" className="m-2 underline text-blue-900 hover:text-blue-600 text-sm">Home</Link>
            <h1 className="m-2 text-xl font-semibold text-cyan-800">Shopping List</h1> 
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
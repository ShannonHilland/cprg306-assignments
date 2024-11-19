"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";
import {useState} from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        const itemList = await getItems(user.uid);
        setItems(itemList);
    }
    
    useEffect(() => {
        loadItems();
    }, [user, loadItems]);

    if (!user) {
        console.error("User is not logged in.");
        return;
    }

    const handleItemSelect = (item) => {
        console.log(item.name);
        if (typeof item.name === 'string') {
            const name = item.name.replace( /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, 
            '').trim();
            const cleanName = name.split(',')[0].trim();
            setSelectedItemName(cleanName);
        } else {
            console.error('Invalid item name', item.name);
        }
    }

    const handleAddItem = async (item) => {
        item.id = await addItem(user.uid, item);
        loadItems();
    }

    return(
        <main className="m-4 ">
            {user ? (
                <>
                    <Link href="./" className="m-2 underline text-blue-900 hover:text-blue-600 text-sm">Back to Sign In</Link>
                    <h1 className="m-2 text-xl font-semibold text-cyan-800">Shopping List</h1> 
                    <NewItem onAddItem={handleAddItem} />
                    <div className="max-w-screen-md grid grid-cols-2 gap-4">
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                        <MealIdeas ingredient={selectedItemName} />
                    </div> 
                </> ) : (
                    <div>
                        <p>Sign in to view the shopping list</p>
                    </div>
                )}
        </main>
    );
}

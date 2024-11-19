import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
    const q = query(
        collection(db, "users", userId, "items"),
        where("quantity", ">", 0)
    );
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
    });
    return items;
} 

export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
}

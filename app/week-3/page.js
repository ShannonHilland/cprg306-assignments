import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="m-4">
            <Link href="/" className="m-2 underline text-blue-900 hover:text-blue-600 text-sm">Home</Link>
            <h1 className="m-2 text-xl font-semibold text-cyan-800">Shopping List</h1>
            <ItemList />
        </main>
    );
}
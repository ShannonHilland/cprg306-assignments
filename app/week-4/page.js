
import Link from "next/link";

import NewItem from "./new-item";

export default function Page() {
    return(
        <main className="m-4">
            <Link href="/" className="m-2 underline text-blue-900 hover:text-blue-600 text-sm">Home</Link>
            <NewItem />
        </main>
    );
}
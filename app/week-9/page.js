"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
      
    return (
        <main className="m-4">
            <h1 className="m-2 text-xl font-semibold text-cyan-800">Authentication</h1>
            <div className="m-2">
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
                            onClick={firebaseSignOut}
                        >
                            Sign Out
                        </button>
                        <div>
                            <Link href=".\week-9\shopping-list" className="underline text-blue-900 hover:text-blue-600">View Shopping List</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={gitHubSignIn}
                        >
                            Sign In with GitHub
                        </button>
                    </>

                )}
            </div>
        </main>
    );
}
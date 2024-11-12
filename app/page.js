import Link from "next/link";

export default function Page() {
  return (
    <main className="m-4">
      <h1 className="text-xl font-semibold text-cyan-800 ">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="./week-2" className="underline text-blue-900 hover:text-blue-600">Week 2</Link></li>
        <li><Link href="./week-3" className="underline text-blue-900 hover:text-blue-600">Week 3</Link></li>
        <li><Link href="./week-4" className="underline text-blue-900 hover:text-blue-600">Week 4</Link></li>
        <li><Link href="./week-5" className="underline text-blue-900 hover:text-blue-600">Week 5</Link></li>
        <li><Link href="./week-6" className="underline text-blue-900 hover:text-blue-600">Week 6</Link></li>
        <li><Link href="./week-7" className="underline text-blue-900 hover:text-blue-600">Week 7</Link></li>
        <li><Link href="./week-8" className="underline text-blue-900 hover:text-blue-600">Week 8</Link></li>
        <li><Link href="./week-9" className="underline text-blue-900 hover:text-blue-600">Week 9</Link></li>
      </ul>
    </main>
  );
}

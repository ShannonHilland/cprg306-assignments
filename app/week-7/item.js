export default function Item({name, quantity, category}) {
    return(
    <ul className="list-none m-2 p-2 bg-slate-100 rounded shadow max-w-96">
        <li className="font-bold">{name}</li>
        <li className="text-sm">Buy {quantity} in {category}</li>
    </ul>
    );
}
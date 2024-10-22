export default function Item({name, quantity, category}) {
    return(
    <li className="list-none m-2 p-2 bg-slate-100 rounded shadow max-w-96">
        <p className="font-bold">{name}</p>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </li>
    );
}
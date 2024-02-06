function Item({ name, quantity, category }) {
    return (
        <li className="list-disc">
            {name} - Quantity: {quantity}, Category: {category}
        </li>
    );
}
export default Item;

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    //the first span style tag says if the item.packed = true we will add a css property strikethough to cross out the item
    <li>
      {/* value for item.checked is same for item.packed to make sure if checkbox is checked or not */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

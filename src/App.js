import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 5, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>FAR AWAY 🏖</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //if there is no description return nothing

    const newItem = { description, quantity, packed: false, id: Date.now };

    setDescription(""); //After the submit button set the description back to an empty string
    setQuantity(1); //also set the quantity back to the default 1 item
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <label for="numberItem"></label>
      {/* the array below has a length of 20 creating an empty array with 20
      elements, as the second part it passes a map function (the first part is
      the _ which is the current value and second part is the index i.) Then we
      return the index which is 0 +1. so the array is from 1-20. Finally add the .map() like regular */}
      <select
        id="numberItem"
        name="numberItem"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <label for="itemName"></label>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    //the first span style tag says if the item.packed = true we will add a css property strikethough to cross out the item
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> ➡️ You have X items on your list, and you have packed X (X%)</em>
    </footer>
  );
}

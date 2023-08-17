import "./index.css";

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
  return (
    <div>
      <form className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <label for="numberItem"></label>
        <select id="numberItem" name="numberItem">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
        </select>
        <label for="itemName"></label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          placeholder="Item..."
        ></input>
        <button className="button">Add</button>
      </form>
    </div>
  );
}

function PackingList() {
  return <div className="list"></div>;
}

function Item() {}

function Stats() {
  return (
    <footer className="stats">
      <em> ➡️ You have X items on your list, and you have packed X (X%)</em>
    </footer>
  );
}

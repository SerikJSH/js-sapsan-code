import "./Header.css";

function Header() {
  const name = "Jhon";
  return (
    <header
      className="header"
      style={{
        color: "green",
        backgroundColor: "beige",
        justifyContent: "space-between",
      }}
    >
      <div>{name}</div>
      <Menu />
    </header>
  );
}

function Menu() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

// export default Header; // экспорт с возиожностью переименования при импорте
export { Header }; // именованный экспорт

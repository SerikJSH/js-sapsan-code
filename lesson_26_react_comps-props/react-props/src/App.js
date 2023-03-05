import "./App.css";
// import Header from "./components/Header/Header"; // импорт из import default Header
import { Header } from "./components/Header/Header"; // именованный импорт
import { UserInfo } from "./components/UserInfo/UserInfo";

const data = [
  {id: 1, name: 'Akgul', age: 41},
  {id: 2, name: 'Akbota', age: 24},
  {id: 3, name: 'Aibope', age: 25}
]

function App() {
  return (
    <div className="App">
      <Header />
      {/* <UserInfo name = "John" age = {30} />
      <UserInfo name = "Peter" age = {50} />
      <UserInfo name = "Anna" age = {18} /> */}
      {
        data.map(function(arrayElement) {
          return <UserInfo name={arrayElement.name} age={arrayElement.age} />
        })
      }

    </div>
  );
}

export default App;

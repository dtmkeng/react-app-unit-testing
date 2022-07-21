import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Product from "./pages/product";
import TodoList from "./pages/todoList";

const Home = () => {
  return (
    <div>
      Home <Counter inital={0}></Counter>
    </div>
  );
};
const About = () => {
  return <div>About</div>;
};
const NotMatch = () => {
  return <div>Not match route.</div>;
};
function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;

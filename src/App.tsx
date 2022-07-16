import Counter from "components/Counter";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

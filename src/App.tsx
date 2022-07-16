import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

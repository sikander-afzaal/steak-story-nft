import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Story from "./Pages/Story/Story";
import Utility from "./Pages/Utility/Utility";
import Role from "./Pages/Role/Role";
import img from "./Assets/line.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <img src={img} className="line-img" alt="" />
      <Story />
      <Role />
      <Utility />
    </div>
  );
}

export default App;

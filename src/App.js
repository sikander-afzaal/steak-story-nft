import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Story from "./Pages/Story/Story";
import Utility from "./Pages/Utility/Utility";
import Role from "./Pages/Role/Role";
import Team from "./Pages/Team/Team";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="line-img"></div>
      <Story />
      <Role />
      <Utility />
      <Team />
    </div>
  );
}

export default App;

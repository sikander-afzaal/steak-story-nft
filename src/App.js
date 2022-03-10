import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Story from "./Pages/Story/Story";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Story />
    </div>
  );
}

export default App;

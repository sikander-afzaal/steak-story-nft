import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Story from "./Pages/Story/Story";
import Utility from "./Pages/Utility/Utility";
import Role from "./Pages/Role/Role";
import Team from "./Pages/Team/Team";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Faq from "./Pages/Faq/Faq";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="line-img"></div>
      <Story />
      <div className="line-img"></div>
      <Role />
      <div style={{ marginBottom: "4px" }} className="line-img"></div>
      <Utility />
      <div className="line-img"></div>
      <Roadmap />
      <div className="line-img"></div>
      <Team />
      <div className="line-img"></div>
      <Faq />
      <div className="line-img"></div>
    </div>
  );
}

export default App;
